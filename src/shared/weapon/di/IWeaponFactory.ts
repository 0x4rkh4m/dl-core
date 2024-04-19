import { IWeapon } from "../IWeapon";
import { Weapon } from "../Weapon";

export interface IWeaponFactory {
  createWeapon(weaponData: IWeapon): Weapon;
}
