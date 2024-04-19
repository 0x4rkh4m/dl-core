import { IVehicle } from "./IVehicle";

export class Vehicle implements IVehicle {
  model: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  type: string;
  shop: string | string[];

  constructor({ model, name, brand, price, category, type, shop }: IVehicle) {
    this.model = model;
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.category = category;
    this.type = type;
    this.shop = shop;
  }
}
