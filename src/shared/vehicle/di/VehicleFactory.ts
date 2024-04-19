import { IVehicleFactory } from "./IVehicleFactory";
import { IVehicle } from "../IVehicle";
import { Vehicle } from "../Vehicle";

export class VehicleFactory implements IVehicleFactory {
    createVehicle(vehicleData: IVehicle): Vehicle {
        return new Vehicle(vehicleData);
    }
}