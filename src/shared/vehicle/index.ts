import { VehicleManager } from "./VehicleManager";
import { IVehicle } from "./IVehicle";
import { VehicleFactory } from "./di/VehicleFactory";

const vehicleFactory = new VehicleFactory();
const vehicleManager = new VehicleManager(vehicleFactory);

const vehicleData: IVehicle = {
    model: 'asbo',
    name: 'Asbo',
    brand: 'Maxwell',
    price: 4000,
    category: 'compacts',
    type: 'automobile',
    shop: 'pdm',
};

vehicleManager.addVehicle("asbo", vehicleData);

//TODO: Add more vehicles
//TODO: Improve Car Types && Scalability