import { ILocaleFactory } from "./ILocaleFactory";
import { ILocale } from "../ILocale";
import { Locale } from "../Locale";

export class LocaleFactory implements ILocaleFactory {
    createLocale(localeData: ILocale): Locale {
        return new Locale(localeData);
    }
}