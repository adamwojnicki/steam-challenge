import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import GameList from "../components/GameList";
import Head from "next/head";
const index = ({ games }) => {
  return (
    <div className="bg-darkGray text-white font-sans">
      <Head>
        <title>STAEM Library</title>
      </Head>
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
