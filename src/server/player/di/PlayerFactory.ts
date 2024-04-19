import { IPlayerFactory } from "./IPlayerFactory";
import { IPlayer } from "../IPlayer";
import { IPlayerData } from "../IPlayerData";
import { Player } from "../Player";

export class PlayerFactory implements IPlayerFactory {
  create(data: IPlayerData): IPlayer {
    return new Player(data.source, data.citizenid /*, other properties */);
  }
}