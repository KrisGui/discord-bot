import { ChannelType } from 'discord.js';
import { bot } from '../..';
import { EventListener } from '../../@types';

const jtcChannelId = '813122934780198983';

export const voiceStateUpdate: EventListener<'voiceStateUpdate'> = {
  name: 'voiceStateUpdate',
  callback: async (oldState, newState) => {
    const tempChannels = bot.tempChannels;
    const oldChannel = oldState.channel;
    const newChannel = newState.channel;
    const guild = newState.guild;
    const newMember = await guild.members.fetch(newState.id);

    if (newChannel === oldChannel) return;

    if (newChannel && newChannel.id === jtcChannelId) {
      const jtcChannel = newChannel;
      const tempChannel = await guild.channels.create({
        name: `${newMember.user.tag.split('#')[0]}'s Channel`,
        type: ChannelType.GuildVoice,
        parent: jtcChannel?.parent,
        permissionOverwrites: [
          {
            id: newMember.id,
            allow: ['Connect', 'ManageChannels', 'Speak', 'UseVAD'],
          },
          {
            id: guild.id,
            allow: ['Connect'],
          },
        ],
      });

      newMember.voice.setChannel(tempChannel);
      tempChannels.set(tempChannel.id, []);

      await jtcChannel?.permissionOverwrites.edit(newMember, {
        Connect: false,
      });

      return setTimeout(async () => {
        await jtcChannel?.permissionOverwrites.delete(newMember);
      }, 1000 * 10);
    }

    if (newChannel && tempChannels.has(newChannel.id) && !newMember.user.bot) {
      tempChannels.get(newChannel.id)?.push(newMember.id);
    }

    if (oldChannel && tempChannels.has(oldChannel.id)) {
      const remainingMembers = tempChannels
        .get(oldChannel.id)
        ?.filter((id) => id !== oldState.id);

      tempChannels.set(oldChannel.id, remainingMembers!);
      if (remainingMembers && remainingMembers.length > 0) {
        const newOwner = await guild.members.fetch(remainingMembers![0]);
        await oldChannel.setName(
          `${newOwner.user.tag.split('#')[0]}'s Channel`
        );
      } else {
        oldChannel.delete();
        tempChannels.delete(oldChannel.id);
      }
    }
  },
};
