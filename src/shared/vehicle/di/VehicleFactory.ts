import { IVehicle } from "../IVehicle";
import { Vehicle } from "../Vehicle";
import { IVehicleFactory } from "./IVehicleFactory";

export class VehicleFactory implements IVehicleFactory {
  createVehicle(vehicleData: IVehicle): Vehicle {
    return new Vehicle(vehicleData);
  }
}
