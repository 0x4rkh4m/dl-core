import { IWeapon } from "../IWeapon";
import { Weapon } from "../Weapon";
import { IWeaponFactory } from "./IWeaponFactory";

export class WeaponFactory implements IWeaponFactory {
  createWeapon(weaponData: IWeapon): Weapon {
    return new Weapon(weaponData);
  }
}
