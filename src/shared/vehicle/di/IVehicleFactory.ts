import { IVehicle } from "../IVehicle";
import { Vehicle } from "../Vehicle";

export interface IVehicleFactory {
  createVehicle(vehicleData: IVehicle): Vehicle;
}
