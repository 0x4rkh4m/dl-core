import { LocaleFactory } from "./di/LocaleFactory";
import { ILocale } from "./ILocale";
import { LocaleManager } from "./LocaleManager";

const localeFactory = new LocaleFactory();
const localeManager = new LocaleManager(localeFactory);

const englishLocale: ILocale = {
  phrases: {
    // TODO: Add English translations
  },
  warnOnMissing: true,
};

const spanishLocale: ILocale = {
  phrases: {
    // TODO: Add Spanish translations
  },
  fallbackLang: englishLocale,
  warnOnMissing: true,
};

localeManager.addLocale("en", englishLocale);
localeManager.addLocale("es", spanishLocale);
