import { ILocale } from "../ILocale";
import { Locale } from "../Locale";
import { ILocaleFactory } from "./ILocaleFactory";

export class LocaleFactory implements ILocaleFactory {
  createLocale(localeData: ILocale): Locale {
    return new Locale(localeData);
  }
}
