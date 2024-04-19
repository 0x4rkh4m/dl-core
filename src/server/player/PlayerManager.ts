import { IPlayer } from "./IPlayer";
import { IPlayerFactory } from "./di/IPlayerFactory";

export class PlayerManager {
    private players: Record<number, IPlayer> = {};
    private playerFactory: IPlayerFactory;

    constructor(playerFactory: IPlayerFactory) {
        this.playerFactory = playerFactory;
    }

    createPlayer(source: number, citizenid: string /*, other properties */): IPlayer {
        const player = this.playerFactory.create({ source, citizenid /*, other properties */ });
        this.players[source] = player;
        return player;
    }

    getPlayer(source: number): IPlayer | undefined {
        return this.players[source];
    }

    getPlayers(): Record<number, IPlayer> {
        return this.players;
    }

    // Add other methods as needed...
}