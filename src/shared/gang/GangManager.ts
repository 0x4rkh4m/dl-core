import { Gang } from "./Gang";
import { IGang } from "./IGang";

export class GangManager {
  private readonly _gangs: Record<string, Gang>;

  constructor() {
    this._gangs = {};
  }

  addGang(id: string, gang: IGang) {
    if (!id || !gang) {
      throw new Error("Invalid gang data");
    }
    this._gangs[id] = new Gang(gang.label, gang.grades);
  }

  getGang(id: string): Gang | undefined {
    return this._gangs[id];
  }
}
