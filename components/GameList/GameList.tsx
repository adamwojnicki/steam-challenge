import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import supabase from "../../supabase/games";
import GameItem from "../GameItem";
import Filters from "../Filters";

interface Game {
  id: string;
  title: string;
  image: string;
  tags: string[];
  platforms: string[];
  price: number;
}

const GameList = ({ data }) => {
  const [games, setGames] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMoreGames = async () => {
    const { data, error } = await supabase
      .from("steam")
      .select("*")
      .range(games.length, games.length + 10);
    setGames((games) => [...games, ...data]);
    console.log(data);
  };

  return (
    <section className="container py-6">
      <Filters />
      <InfiniteScroll
        dataLength={games.length}
        next={getMoreGames}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p>Nothing more to show...</p>}
      >
        {games.map((g: Game) => (
          <GameItem key={g.id} game={g} />
        ))}
      </InfiniteScroll>
    </section>
  );
};

export default GameList;
