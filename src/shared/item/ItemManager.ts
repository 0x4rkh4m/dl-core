import { IItem, ItemType, IWeapon } from "./IItem";
import { Item, Weapon } from "./Item";

export class ItemManager {
  private readonly _items: Record<string, Item | Weapon>;

  constructor() {
    this._items = {};
  }

  addItem(id: string, item: IItem | IWeapon) {
    if (!id || !item) {
      throw new Error("Invalid item data");
    }
    if (item.type === ItemType.Weapon) {
      this._items[id] = new Weapon(item as IWeapon);
    } else {
      this._items[id] = new Item(item);
    }
  }

  getItem(id: string): Item | Weapon | undefined {
    return this._items[id];
  }
}
