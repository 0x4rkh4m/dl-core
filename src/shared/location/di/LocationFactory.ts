import { ILocationFactory } from "./ILocationFactory";
import { Location } from "../Location";

export class LocationFactory implements ILocationFactory {
    createLocation(name: string, coordinates: { x: number; y: number; z: number; heading: number }): Location {
        return new Location(name, coordinates);
    }
}