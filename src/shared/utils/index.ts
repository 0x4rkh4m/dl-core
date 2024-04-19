import { UtilsFactory } from "./di/UtilsFactory";
import { UtilsManager } from "./UtilsManager";

const utilsFactory = new UtilsFactory();
const utilsManager = new UtilsManager(utilsFactory);

const utils = utilsManager.getUtils();
