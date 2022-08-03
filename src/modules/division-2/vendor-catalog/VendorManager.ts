// class VendorManager {
//   itemList: VendorItem[] = [];
//   typeMap: Map<VendorItem['type'], VendorItem> = new Map();
//   vendorMap: Map<VendorItem['vendor'], VendorItem> = new Map();
//   rarityMap: Map<VendorItem['rarity'], VendorItem> = new Map();
//   subTypeMap: Map<VendorItem['subType'], VendorItem> = new Map();

//   addItem(item: any): void {
//     this.itemList.push(item);
//   }

//   fetchData() {}
// }

// interface Attribute {
//   value: string;
//   label: string;
// }

// interface VendorItemProps {
//   type: string;
//   subType: string;
//   rarity: string;
//   name: string;
//   vendor: string;
// }

// class VendorItem {
//   type: string;
//   subType: string;
//   rarity: string;
//   name: string;
//   vendor: string;
//   attributes: Attribute[] = [];

//   constructor(props: VendorItemProps) {
//     const { type, subType, rarity, name, vendor } = props;

//     this.type = type;
//     this.subType = subType;
//     this.rarity = rarity;
//     this.name = name;
//     this.vendor = vendor;
//   }

//   addAttribute(attribute: Attribute): void {
//     this.attributes.push(attribute);
//   }
// }

// interface WeaponProps extends VendorItemProps {
//   dmg: string;
// }

// class Weapon extends VendorItem {
//   dmg: string;
  
//   constructor(props: WeaponProps) {
//     super(props)

//     this.dmg = props.dmg;
//   }
// }
