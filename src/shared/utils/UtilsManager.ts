import { IUtilsFactory } from "./di/IUtilsFactory";
import { IUtils } from "./IUtils";

export class UtilsManager {
  private readonly utils: IUtils;

  constructor(utilsFactory: IUtilsFactory) {
    this.utils = utilsFactory.create();
  }

  getUtils(): IUtils {
    return this.utils;
  }
}
