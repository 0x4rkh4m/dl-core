export enum WeaponType {
  Melee,
  Handgun,
  Shotgun,
  SubmachineGun,
  AssaultRifle,
  LightMachineGun,
  SniperRifle,
  HeavyWeapon,
  Throwable,
}

export enum ConsumableType {
  Food,
  Drink,
  Medical,
  Ammo,
}

export enum DrugType {}

export enum ToolType {}

export enum ItemType {
  Weapon,
  Attachment,
  Ammo,
  Consumable,
  Drug,
  Tool,
  Material,
}

export type Item = {
  name: string;
  label: string;
  weight: number;
  type: ItemType;
  image: string;
  unique: boolean;
  usable: boolean;
  description: string;
};

export type Weapon = Item & {
  ammoType: string;
  weaponType: WeaponType;
  damage: number;
  range: number;
  rateOfFire: number;
  accuracy: number;
  clipSize: number;
  reloadSpeed: number;
};

export interface IItem extends Item {}
export interface IWeapon extends Weapon {}
