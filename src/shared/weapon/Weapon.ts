import { IWeapon } from "./IWeapon";

export class Weapon implements IWeapon {
  name: string;
  label: string;
  weapontype: string;
  ammotype: string | null;
  damagereason: string;

  constructor({ name, label, weapontype, ammotype, damagereason }: IWeapon) {
    this.name = name;
    this.label = label;
    this.weapontype = weapontype;
    this.ammotype = ammotype;
    this.damagereason = damagereason;
  }
}
