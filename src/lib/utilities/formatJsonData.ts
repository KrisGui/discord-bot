import { stripMarkup } from '.';
import {
  JsonDataFormatted,
  Gear,
  isGearData,
  isModData,
  isWeaponData,
  JsonDataRaw,
  Mod,
  Weapon,
} from '../types/Division2';

export function formatJsonData(items: JsonDataRaw): JsonDataFormatted {
  if (isGearData(items)) {
    return items.reduce(
      (arr, item) => [
        ...arr,
        <Gear>{
          category: item.type,
          vendor: item.vendor,
          rarity: item.rarity,
          type: item.slot,
          name: item.name,
          brand: item.brand,
          attributes: [{ value: stripMarkup(item.attributes), label: 'test' }],
          talent: stripMarkup(item.talents),
        },
      ],
      [] as Gear[]
    );
  }

  if (isWeaponData(items)) {
    return items.reduce(
      (arr, item) => [
        ...arr,
        <Weapon>{
          category: item.type,
          vendor: item.vendor,
          rarity: item.rarity,
          type: item.type,
          name: item.name,
          talent: item.talent,
          attributes: [
            { value: stripMarkup(item.attribute1), label: 'attr1' },
            { value: stripMarkup(item.attribute2), label: 'attr2' },
            { value: stripMarkup(item.attribute3), label: 'attr3' },
          ],
        },
      ],
      [] as Weapon[]
    );
  }

  if (isModData(items)) {
    return items.reduce(
      (arr, item) => [
        ...arr,
        <Mod>{
          category: item.type,
          vendor: item.vendor,
          type:
            item.rarity === 'header-he'
              ? item.attributes.split('<br/>')[0].trim()
              : 'Gear',
          name: item.name,
          attributes: item.attributes.includes('<br/>')
            ? [
                {
                  value: item.attributes.split('<br/>')[1].trim(),
                  label: 'modAttr',
                },
              ]
            : [{ value: item.attributes, label: 'modAttr' }],
        },
      ],
      [] as Mod[]
    );
  }

  throw new Error('invalid input');
}
