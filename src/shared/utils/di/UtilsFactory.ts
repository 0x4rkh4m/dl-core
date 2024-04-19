import { IUtils } from "../IUtils";
import { Utils } from "../Utils";
import { IUtilsFactory } from "./IUtilsFactory";

export class UtilsFactory implements IUtilsFactory {
  create(): IUtils {
    return new Utils();
  }
}
