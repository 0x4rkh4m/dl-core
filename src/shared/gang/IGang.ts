export enum GradeLevel {
  Unaffiliated,
  Recruit,
  Enforcer,
  ShotCaller,
  Boss,
}

export type Grade = { name: GradeLevel; isBoss?: boolean; };

export interface IGang {
  label: string;
  grades: Record<string, Grade>;
}