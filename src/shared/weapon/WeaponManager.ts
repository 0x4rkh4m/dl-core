import { Weapon } from "./Weapon";
import { IWeapon } from "./IWeapon";
import { IWeaponFactory } from "./di/IWeaponFactory";

export class WeaponManager {
    private readonly _weapons: Record<string, Weapon>;
    private readonly _weaponFactory: IWeaponFactory;

    constructor(weaponFactory: IWeaponFactory) {
        this._weapons = {};
        this._weaponFactory = weaponFactory;
    }

    addWeapon(id: string, weaponData: IWeapon) {
        if (!id || !weaponData) {
            throw new Error("Invalid weapon data");
        }
        this._weapons[id] = this._weaponFactory.createWeapon(weaponData);
    }

    getWeapon(id: string): Weapon | undefined {
        return this._weapons[id];
    }
}