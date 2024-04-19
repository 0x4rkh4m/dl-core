import { IItem, ItemType, IWeapon, WeaponType } from "./IItem";

export class Item implements IItem {
  name: string;
  label: string;
  weight: number;
  type: ItemType;
  image: string;
  unique: boolean;
  usable: boolean;
  description: string;

  constructor(item: IItem) {
    this.name = item.name;
    this.label = item.label;
    this.weight = item.weight;
    this.type = item.type;
    this.image = item.image;
    this.unique = item.unique;
    this.usable = item.usable;
    this.description = item.description;
  }
}

export class Weapon extends Item implements IWeapon {
  ammoType: string;
  weaponType: WeaponType;
  damage: number;
  range: number;
  rateOfFire: number;
  accuracy: number;
  clipSize: number;
  reloadSpeed: number;

  constructor(weapon: IWeapon) {
    super(weapon);
    this.ammoType = weapon.ammoType;
    this.weaponType = weapon.weaponType;
    this.damage = weapon.damage;
    this.range = weapon.range;
    this.rateOfFire = weapon.rateOfFire;
    this.accuracy = weapon.accuracy;
    this.clipSize = weapon.clipSize;
    this.reloadSpeed = weapon.reloadSpeed;
  }
}
