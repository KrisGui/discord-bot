import { fetch } from 'undici';
import { Command } from '../../../lib/types';
import { DataFromJson } from '../../../lib/types/Division2';
import { formatJsonData } from '../../../lib/utilities';
import { APIEmbed } from 'discord.js';

export const vendorCatalog: Command = {
  name: 'vendor-catalog',
  description: 'Lists weekly Division 2 vendor items for sale.',
  options: [
    {
      name: 'type',
      type: 3,
      description: "Choose which category of items you'd like to see",
      required: true,
      choices: [
        {
          name: 'Gear',
          value: 'gear',
        },
        {
          name: 'Weapons',
          value: 'weapons',
        },
        {
          name: 'Mods',
          value: 'mods',
        },
      ],
    },
  ],
  execute: async ({ interaction }) => {
    const typeChoice = interaction.options.get('type');

    try {
      const response = await fetch(
        `https://rubenalamina.mx/division/${typeChoice?.value}.json`
      );
      const jsonResponse = (await response.json()) as DataFromJson;
      const data = formatJsonData(jsonResponse);
      console.log(data);

      const embedHeaderTemplate: APIEmbed = {
        title: 'The Division 2: Weekly Vendor Reset',
        url: 'https://rubenalamina.mx/the-division-weekly-vendor-reset/',
        description: `__${
          typeChoice && typeChoice.value?.toString().toUpperCase()
        }__`,
        thumbnail: {
          url: `https://robohash.org/${
            typeChoice && typeChoice.value
          }?set=set4`,
        },
      };

      const embed: APIEmbed = {
        ...embedHeaderTemplate,
        fields: [
          {
            name: 'Some name',
            value: `${data[0].vendor}`,
            inline: true,
          },
          {
            name: 'Some name',
            value: `${data[0].vendor}`,
            inline: true,
          },
          {
            name: `${data[0].name}`,
            value: `${data[0].vendor}`,
            inline: true,
          },
          { name: '\u200b', value: '\u200b', inline: false },
        ],
      };

      await interaction.reply({
        embeds: [embed],
        ephemeral: true,
      });
    } catch (err) {
      console.error(err);
      await interaction.reply({
        content: 'Something went wrong...',
        ephemeral: true,
      });
    }
  },
};
