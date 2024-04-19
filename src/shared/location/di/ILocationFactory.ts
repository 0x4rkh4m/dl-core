import { Location } from "../Location";

export interface ILocationFactory {
    createLocation(name: string, coordinates: { x: number; y: number; z: number; heading: number }): Location;
}