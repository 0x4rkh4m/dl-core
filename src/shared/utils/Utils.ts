import { IUtils } from "./IUtils";

const StringCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const NumberCharset = "0123456789";

export class Utils implements IUtils {
  StarterItems = {
    phone: { amount: 1, item: "phone" },
    id_card: { amount: 1, item: "id_card" },
    driver_license: { amount: 1, item: "driver_license" },
  };

  RandomStr = (length: number): string =>
    Array.from({ length }, () => StringCharset.charAt(Math.floor(Math.random() * StringCharset.length))).join("");

  RandomInt = (length: number): string =>
    Array.from({ length }, () => NumberCharset.charAt(Math.floor(Math.random() * NumberCharset.length))).join("");

  SplitStr = (str: string, delimiter: string): string[] => str.split(delimiter);

  Trim = (value: string | null): string | null => value?.trim() || null;

  FirstToUpper = (value: string | null): string | null => value?.charAt(0).toUpperCase() + value.slice(1) || null;

  Round = (value: number, numDecimalPlaces: number): number => {
    const power = Math.pow(10, numDecimalPlaces);
    return Math.round(value * power) / power;
  };

  ChangeVehicleExtra = (vehicle: any, extra: any, enable: boolean) => {
    throw new Error("Method not implemented.");
    // TODO: Implement this method
  };

  SetDefaultVehicleExtras = (vehicle: any, config: any) => {
    throw new Error("Method not implemented.");
    // TODO: Implement this method
  };

  MaleNoGloves = {
    [0]: true,
    [1]: true,
    [2]: true,
    [3]: true,
    [4]: true,
    [5]: true,
    [6]: true,
    [7]: true,
    [8]: true,
    [9]: true,
    [10]: true,
    [11]: true,
    [12]: true,
    [13]: true,
    [14]: true,
    [15]: true,
    [18]: true,
    [26]: true,
    [52]: true,
    [53]: true,
    [54]: true,
    [55]: true,
    [56]: true,
    [57]: true,
    [58]: true,
    [59]: true,
    [60]: true,
    [61]: true,
    [62]: true,
    [112]: true,
    [113]: true,
    [114]: true,
    [118]: true,
    [125]: true,
    [132]: true,
  };

  FemaleNoGloves = {
    [0]: true,
    [1]: true,
    [2]: true,
    [3]: true,
    [4]: true,
    [5]: true,
    [6]: true,
    [7]: true,
    [8]: true,
    [9]: true,
    [10]: true,
    [11]: true,
    [12]: true,
    [13]: true,
    [14]: true,
    [15]: true,
    [19]: true,
    [59]: true,
    [60]: true,
    [61]: true,
    [62]: true,
    [63]: true,
    [64]: true,
    [65]: true,
    [66]: true,
    [67]: true,
    [68]: true,
    [69]: true,
    [70]: true,
    [71]: true,
    [129]: true,
    [130]: true,
    [131]: true,
    [135]: true,
    [142]: true,
    [149]: true,
    [153]: true,
    [157]: true,
    [161]: true,
    [165]: true,
  };
}
