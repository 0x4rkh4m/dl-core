import { IPlayerData } from "./IPlayerData";

export interface IPlayer extends IPlayerData {
    login(source: number, citizenid: string, newData: any): boolean;
    getOfflinePlayer(citizenid: string): IPlayer | null;
    getPlayerByLicense(license: string): IPlayer | null;
    checkPlayerData(source: number | null, PlayerData: any): IPlayer;
    logout(source: number): void;
    // Add other methods as needed...
}