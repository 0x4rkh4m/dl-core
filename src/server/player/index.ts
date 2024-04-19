import { PlayerFactory } from "./di/PlayerFactory";
import { PlayerManager } from "./PlayerManager";

const playerFactory = new PlayerFactory();
const playerManager = new PlayerManager(playerFactory);

const players = playerManager.getPlayers();

export { players };