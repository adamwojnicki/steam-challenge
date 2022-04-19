import React from "react";

const GameList = ({ games }) => {
  return (
    <div>
      {games.map((g: { id: string; title: string }) => (
        <p key={g.id}>{g.title}</p>
      ))}
    </div>
  );
};

export default GameList;
