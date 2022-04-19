import React from "react";
import dotenv from "dotenv/config";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import GameList from "../components/GameList";

const index = ({ games }) => {
  return (
    <div>
      <Header />
      <Carousel />
      <GameList games={games} />
    </div>
  );
};

export async function getStaticProps() {
  const apikey = process.env.API_KEY;
  const Authorization = process.env.AUTH_KEY;
  const res = await fetch(
    "https://gqkuommdmfzmwkzdewma.supabase.co/rest/v1/steam?select=*",
    {
      headers: {
        apikey,
        Authorization,
      },
    }
  );
  const games = await res.json();

  return {
    props: {
      games,
    },
  };
}

export default index;
