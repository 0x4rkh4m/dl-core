import { Gang } from "./Gang";
import {Grade, IGang} from "./IGang";

export class GangManager {
  private readonly _gangs: Record<string, Gang>;
  private readonly _gangFactory: (label: string, grades: Record<string, Grade>) => Gang;

  constructor(gangFactory: (label: string, grades: Record<string, Grade>) => Gang) {
    this._gangs = {};
    this._gangFactory = gangFactory;
  }

  addGang(id: string, gang: IGang) {
    if (!id || !gang) {
      throw new Error("Invalid gang data");
    }
    this._gangs[id] = this._gangFactory(gang.label, gang.grades);
  }

  getGang(id: string): Gang | undefined {
    return this._gangs[id];
  }
}