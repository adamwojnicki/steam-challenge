import React from "react";
import GameItem from "../GameItem";

interface Game {
  id: string;
  title: String;
}

const GameList = ({ games }) => {
  return (
    <div>
      {games.map((g: Game) => (
        <GameItem key={g.id} game={g} />
      ))}
    </div>
  );
};

export default GameList;
