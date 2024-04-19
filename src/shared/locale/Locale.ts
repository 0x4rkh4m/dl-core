import { ILocale } from "./ILocale";

export class Locale implements ILocale {
    private _phrases: { [key: string]: string };
    private readonly _fallback: Locale | null;
    private readonly _warnOnMissing: boolean;

    constructor({ phrases = {}, fallbackLang = null, warnOnMissing = true }: ILocale) {
        this._phrases = phrases;
        this._fallback = fallbackLang ? new Locale(fallbackLang) : null;
        this._warnOnMissing = warnOnMissing;
    }

    get phrases(): { [key: string]: string } {
        return this._phrases;
    }

    extend(phrases: { [key: string]: string }, prefix?: string): void {
        for (const key in phrases) {
            const phrase = phrases[key];
            const prefixKey = prefix ? `${prefix}.${key}` : key;
            if (typeof phrase === 'object') {
                this.extend(phrase, prefixKey);
            } else {
                this._phrases[prefixKey] = phrase;
            }
        }
    }

    clear(): void {
        this._phrases = {};
    }

    replace(phrases: { [key: string]: string }): void {
        this.clear();
        this.extend(phrases);
    }

    t(key: string, subs: { [key: string]: any } = {}): string {
        let phrase = this._phrases[key];
        if (phrase === undefined) {
            if (this._warnOnMissing) {
                console.warn(`Warning: Missing phrase for key: "${key}"`);
            }
            if (this._fallback) {
                return this._fallback.t(key, subs);
            }
            return key;
        }

        for (const k in subs) {
            const templateToFind = `%{${k}}`;
            phrase = phrase.replace(templateToFind, String(subs[k]));
        }

        return phrase;
    }

    has(key: string): boolean {
        return this._phrases[key] !== undefined;
    }

    delete(phraseTarget: string | { [key: string]: any }, prefix?: string): void {
        if (typeof phraseTarget === 'string') {
            delete this._phrases[phraseTarget];
        } else {
            for (const key in phraseTarget) {
                const phrase = phraseTarget[key];
                const prefixKey = prefix ? `${prefix}.${key}` : key;
                if (typeof phrase === 'object') {
                    this.delete(phrase, prefixKey);
                } else {
                    delete this._phrases[prefixKey];
                }
            }
        }
    }
}