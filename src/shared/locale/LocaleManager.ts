import { Locale } from "./Locale";
import { ILocale } from "./ILocale";
import { ILocaleFactory } from "./di/ILocaleFactory";

export class LocaleManager {
    private readonly _locales: Record<string, Locale>;
    private readonly _localeFactory: ILocaleFactory;

    constructor(localeFactory: ILocaleFactory) {
        this._locales = {};
        this._localeFactory = localeFactory;
    }

    addLocale(id: string, localeData: ILocale) {
        if (!id || !localeData) {
            throw new Error("Invalid locale data");
        }
        this._locales[id] = this._localeFactory.createLocale(localeData);
    }

    getLocale(id: string): Locale | undefined {
        return this._locales[id];
    }
}