import { Grade, IGang } from "./IGang";

export class Gang implements IGang {
  private readonly _label: string;
  private readonly _grades: Record<string, Grade>;

  constructor(label: string, grades: Record<string, Grade>) {
    if (!label || !grades) {
      throw new Error("Invalid gang data");
    }
    this._label = label;
    this._grades = grades;
  }

  get label(): string {
    return this._label;
  }

  get grades(): Record<string, Grade> {
    return this._grades;
  }
}
