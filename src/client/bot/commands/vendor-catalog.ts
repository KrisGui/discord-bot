import { APIEmbed } from 'discord.js';
import { Command } from '../types';

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
        fields: [],
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
