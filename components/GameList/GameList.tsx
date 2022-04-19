import React from "react";
import GameItem from "../GameItem";
import Filters from "../Filters";

interface Game {
  id: string;
  title: String;
}

const GameList = ({ games }) => {
  return (
    <div>
      <Filters />
      {games.map((g: Game) => (
        <GameItem key={g.id} game={g} />
      ))}
    </div>
  );
};

export default GameList;
