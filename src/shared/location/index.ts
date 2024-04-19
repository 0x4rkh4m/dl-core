import { LocationManager } from "./LocationManager";
import { ILocation } from "./ILocation";
import { LocationFactory } from "./di/LocationFactory";

const locationFactory = new LocationFactory();
const locationManager = new LocationManager(locationFactory);

const locationData: ILocation = {
    name: "casino",
    coordinates: { x: 923.2289, y: 47.3113, z: 81.1063, heading: 237.6052 },
};

locationManager.addLocation("casino", locationData);

//TODO: Add more locations