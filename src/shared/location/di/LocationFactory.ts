import { Location } from "../Location";
import { ILocationFactory } from "./ILocationFactory";

export class LocationFactory implements ILocationFactory {
  createLocation(name: string, coordinates: { x: number; y: number; z: number; heading: number; }): Location {
    return new Location(name, coordinates);
  }
}
