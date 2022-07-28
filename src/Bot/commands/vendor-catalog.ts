import { fetch } from 'undici';
import { Command } from '../../@types';

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
        `https://rubenalamina.mx/division/${typeChoice}.json`
      );
      const jsonResponse = await response.json();

      await interaction.reply({
        content: 'got the data, check the console',
        ephemeral: true,
      });
    } catch (err) {
      console.error(err);
    }
  },
};
