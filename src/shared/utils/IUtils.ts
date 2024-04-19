export interface IUtils {
  StarterItems: Record<string, { amount: number; item: string; }>;
  RandomStr(length: number): string;
  RandomInt(length: number): string;
  SplitStr(str: string, delimiter: string): string[];
  Trim(value: string | null): string | null;
  FirstToUpper(value: string | null): string | null;
  Round(value: number, numDecimalPlaces: number): number;
  // Add other methods as needed...
}
