import { ChannelType, VoiceChannel } from 'discord.js';
import { bot } from '../..';
import { EventListener } from '../../@types';

const jtcChannelId = '813122934780198983';

export const voiceStateUpdate: EventListener<'voiceStateUpdate'> = {
  name: 'voiceStateUpdate',
  handler: async (oldState, newState) => {
    const guild = newState.guild;
    const member = await guild.members.fetch(newState.id);
    let tempChannel: VoiceChannel;

    if (newState.channelId === jtcChannelId) {
      const jtcChannel = newState.channel;
      tempChannel = await guild.channels.create({
        name: `${member.user.tag.split('#')[0]}'s Channel`,
        type: ChannelType.GuildVoice,
        parent: jtcChannel?.parent,
        permissionOverwrites: [
          {
            id: member.id,
            allow: ['Connect', 'ManageChannels'],
          },
          {
            id: guild.id,
            allow: ['Connect'],
          },
        ],
      });

      bot.tempChannels.set(member.id, tempChannel.id);
      member.voice.setChannel(tempChannel);

      await jtcChannel?.permissionOverwrites.edit(member, {
        Connect: false,
      });

      setTimeout(async () => {
        await jtcChannel?.permissionOverwrites.delete(member);
      }, 1000 * 10);
    }

    if (oldState.channelId === bot.tempChannels.get(member.id)) {
      const oldChannel = oldState.channel;
      const oldChannelMembers = oldChannel?.members
        .filter((member) => !member.user.bot)
        .map((member) => member.id);

      if (oldChannelMembers!.length > 0) {
        // reassign ownership
      } else {
        bot.tempChannels.delete(member.id);
        return oldChannel?.delete();
      }
    }
  },
};
