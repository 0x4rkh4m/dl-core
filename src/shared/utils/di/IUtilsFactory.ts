import { IUtils } from "../IUtils";

export interface IUtilsFactory {
  create(): IUtils;
}
