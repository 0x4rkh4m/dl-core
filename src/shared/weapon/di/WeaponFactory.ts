import { IWeaponFactory } from "./IWeaponFactory";
import { IWeapon } from "../IWeapon";
import { Weapon } from "../Weapon";

export class WeaponFactory implements IWeaponFactory {
    createWeapon(weaponData: IWeapon): Weapon {
        return new Weapon(weaponData);
    }
}