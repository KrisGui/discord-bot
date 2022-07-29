import { stripMarkup } from '.';
import {
  DataFromJson,
  DataFormatted,
  GearFormatted,
  isGearData,
  isWeaponData,
  ModFormatted,
  WeaponFormatted,
} from '../types/Division2';

export function formatJsonData(items: DataFromJson): DataFormatted {
  if (isGearData(items)) {
    return items.reduce(
      (arr, item) => [
        ...arr,
        <GearFormatted>{
          vendor: item.vendor,
          name: item.name,
          brand: item.brand,
          slot: item.slot,
          coreAttribute: stripMarkup(item.core),
          attributes: stripMarkup(item.attributes),
          talent: stripMarkup(item.talents),
        },
      ],
      [] as GearFormatted[]
    );
  } else if (isWeaponData(items)) {
    return items.reduce(
      (arr, item) => [
        ...arr,
        <WeaponFormatted>{
          vendor: item.vendor,
          name: item.name,
          talent: item.talent,
          coreAttributes: [
            stripMarkup(item.attribute1),
            stripMarkup(item.attribute2),
          ],
          attribute: stripMarkup(item.attribute3),
        },
      ],
      [] as WeaponFormatted[]
    );
  } else {
    return items.reduce(
      (arr, item) => [
        ...arr,
        <ModFormatted>{
          vendor: item.vendor,
          name: item.name,
          type:
            item.rarity === 'header-he'
              ? item.attributes.split('<br/>')[0].trim()
              : 'Gear',
          attributes: item.attributes.includes('<br/>')
            ? item.attributes.split('<br/>')[1].trim()
            : item.attributes,
        },
      ],
      [] as ModFormatted[]
    );
  }
}
