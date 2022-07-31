export enum Categories {
  gear = 'gear',
  weapon = 'weapon',
  mod = 'mod',
}

export interface CategoryProps {
  value: Categories;
}

export enum Vendors {
  WhiteHouse = 'White House',
  Clan = 'Clan',
  Countdown = 'Countdown',
  TheTheater = 'The Theater',
  TheCampus = 'The Campus',
  DZWest = 'DZ West',
  DZSouth = 'DZ South',
  DZEast = 'DZ East',
  Haven = 'Haven',
  Benitez = 'Benitez',
  Cassie = 'Cassie',
}

export interface VendorProps {
  value: Vendors;
}
