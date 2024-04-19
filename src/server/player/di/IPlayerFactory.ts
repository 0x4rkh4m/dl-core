import { IPlayer } from "../IPlayer";
import { IPlayerData } from "../IPlayerData";

export interface IPlayerFactory {
    create(data: IPlayerData): IPlayer;
}