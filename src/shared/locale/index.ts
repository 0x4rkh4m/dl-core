import { Locale } from "./Locale";
import { LocaleManager } from "./LocaleManager";
import { ILocale } from "./ILocale";

const localeFactory = (localeData: ILocale) => new Locale(localeData);
const localeManager = new LocaleManager(localeFactory);

const englishLocale: ILocale = {
    phrases: {
        //TODO: Add English translations
    },
    warnOnMissing: true,
};

const spanishLocale: ILocale = {
    phrases: {
        //TODO: Add Spanish translations
    },
    fallbackLang: englishLocale,
    warnOnMissing: true,
};

localeManager.addLocale("en", englishLocale);
localeManager.addLocale("es", spanishLocale);