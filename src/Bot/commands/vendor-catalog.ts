import { fetch } from 'undici';
import { Command } from '../../@types';
import { ApiResponse } from '../../@types/Division2';
import { formatApiResponse } from '../../utilities';

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
      const jsonResponse = await response.json() as ApiResponse;

      formatApiResponse(jsonResponse);

      await interaction.reply({
        content: 'needs to be displayed... embed?',
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
