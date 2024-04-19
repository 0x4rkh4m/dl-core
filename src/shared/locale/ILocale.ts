export interface ILocale {
  phrases: { [key: string]: string; };
  fallbackLang?: ILocale;
  warnOnMissing?: boolean;
}
