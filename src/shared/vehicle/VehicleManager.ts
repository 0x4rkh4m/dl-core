import { Vehicle } from "./Vehicle";
import { IVehicle } from "./IVehicle";
import { IVehicleFactory } from "./di/IVehicleFactory";

export class VehicleManager {
    private readonly _vehicles: Record<string, Vehicle>;
    private readonly _vehicleFactory: IVehicleFactory;

    constructor(vehicleFactory: IVehicleFactory) {
        this._vehicles = {};
        this._vehicleFactory = vehicleFactory;
    }

    addVehicle(id: string, vehicleData: IVehicle) {
        if (!id || !vehicleData) {
            throw new Error("Invalid vehicle data");
        }
        this._vehicles[id] = this._vehicleFactory.createVehicle(vehicleData);
    }

    getVehicle(id: string): Vehicle | undefined {
        return this._vehicles[id];
    }
}