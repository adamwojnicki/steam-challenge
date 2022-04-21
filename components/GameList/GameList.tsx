import React from "react";
import GameItem from "../GameItem";
import Filters from "../Filters";

interface Game {
  id: string;
  title: string;
  image: string;
  tags: string[];
}

const GameList = ({ games }) => {
  return (
    <section className="container py-6">
      <Filters />
      {games.map((g: Game) => (
        <GameItem key={g.id} game={g} />
      ))}
    </section>
  );
};

export default GameList;
