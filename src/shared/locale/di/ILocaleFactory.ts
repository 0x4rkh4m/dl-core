import { ILocale } from "../ILocale";
import { Locale } from "../Locale";

export interface ILocaleFactory {
    createLocale(localeData: ILocale): Locale;
}