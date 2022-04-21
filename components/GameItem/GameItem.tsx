import React from "react";

interface Game {
  game: {
    title: String;
    image: string;
  };
}

const GameItem = ({ game }: Game) => {
  return (
    <div className="rounded-lg bg-dark my-3 flex flex-col md:flex-row overflow-hidden">
      <figure className="w-full md:w-1/2 lg:1/3">
        <img className="w-full" src={game.image} alt="" />
      </figure>
      <div className="p-4 w-full md:w-1/2 lg:w-2/3">
        <h3>{game.title}</h3>
      </div>
    </div>
  );
};

export default GameItem;
