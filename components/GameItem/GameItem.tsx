import React from "react";

interface Game {
  game: {
    title: String;
  };
}

const GameItem = ({ game }: Game) => {
  return <div>{game.title}</div>;
};

export default GameItem;
