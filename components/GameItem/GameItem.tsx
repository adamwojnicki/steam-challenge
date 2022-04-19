import React from "react";

interface Game {
  game: {
    title: String;
    image: string;
  };
}

const GameItem = ({ game }: Game) => {
  return (
    <div className="rounded-lg bg-dark my-3 flex flex-col md:flex-row">
      <figure className="w-full md:w-1/2 overflow-hidden">
        <img className="w-full overflow-hidden" src={game.image} alt="" />
      </figure>
      <div className="p-4 w-full md:w-1/2">
        <h3>{game.title}</h3>
      </div>
    </div>
  );
};

export default GameItem;
