import { LocaleManager } from "./LocaleManager";
import { ILocale } from "./ILocale";
import {LocaleFactory} from "./di/LocaleFactory";

const localeFactory = new LocaleFactory();
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