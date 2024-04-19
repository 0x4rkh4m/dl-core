import { Location } from "./Location";
import { ILocation } from "./ILocation";
import {ILocationFactory} from "./di/ILocationFactory";

export class LocationManager {
    private readonly _locations: Record<string, Location>;
    private readonly _locationFactory: ILocationFactory;

    constructor(locationFactory: ILocationFactory) {
        this._locations = {};
        this._locationFactory = locationFactory;
    }

    addLocation(id: string, locationData: ILocation) {
        if (!id || !locationData) {
            throw new Error("Invalid location data");
        }
        this._locations[id] = this._locationFactory.createLocation(locationData.name, locationData.coordinates);
    }

    getLocation(id: string): Location | undefined {
        return this._locations[id];
    }
}