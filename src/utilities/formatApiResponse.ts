import { stripMarkup } from '.';
import {
  ApiResponse,
  ApiResponseFormatted,
  Gear,
  isGearResponse,
  isWeaponResponse,
  Mod,
  Weapon,
} from '../@types/Division2';

export function formatApiResponse(items: ApiResponse): ApiResponseFormatted {
  let output: unknown[] = [];

  if (isGearResponse(items)) {
    items.map((item) => {
      return output.push(<Gear>{
        vendor: item.vendor,
        name: item.name,
        brand: item.brand,
        slot: item.slot,
        coreAttribute: stripMarkup(item.core),
        attributes: stripMarkup(item.attributes),
        talent: stripMarkup(item.talents),
      });
    });
  } else if (isWeaponResponse(items)) {
    items.map((item) => {
      return output.push(<Weapon>{
        vendor: item.vendor,
        name: item.name,
        talent: item.talent,
        coreAttributes: [
          stripMarkup(item.attribute1),
          stripMarkup(item.attribute2),
        ],
        attribute: stripMarkup(item.attribute3),
      });
    });
  } else {
    items.map((item) => {
      return output.push(<Mod>{
        vendor: item.vendor,
        name: item.name,
        type:
          item.rarity === 'header-he'
            ? item.attributes.split('<br/>')[0].trim()
            : 'Gear',
        attributes: item.attributes.includes('<br/>')
          ? item.attributes.split('<br/>')[1].trim()
          : item.attributes,
      });
    });
  }

  return output as ApiResponseFormatted;
}
