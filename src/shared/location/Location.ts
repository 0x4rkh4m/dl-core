import { ILocation } from "./ILocation";

export class Location implements ILocation {
  private readonly _name: string;
  private readonly _coordinates: { x: number; y: number; z: number; heading: number; };

  constructor(name: string, coordinates: { x: number; y: number; z: number; heading: number; }) {
    this._name = name;
    this._coordinates = coordinates;
  }

  get name(): string {
    return this._name;
  }

  get coordinates(): { x: number; y: number; z: number; heading: number; } {
    return this._coordinates;
  }
}
