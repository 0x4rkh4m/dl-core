import { Locale } from "./Locale";
import { ILocale } from "./ILocale";

export class LocaleManager {
    private readonly _locales: Record<string, Locale>;
    private readonly _localeFactory: (localeData: ILocale) => Locale;

    constructor(localeFactory: (localeData: ILocale) => Locale) {
        this._locales = {};
        this._localeFactory = localeFactory;
    }

    addLocale(id: string, localeData: ILocale) {
        if (!id || !localeData) {
            throw new Error("Invalid locale data");
        }
        this._locales[id] = this._localeFactory(localeData);
    }

    getLocale(id: string): Locale | undefined {
        return this._locales[id];
    }
}