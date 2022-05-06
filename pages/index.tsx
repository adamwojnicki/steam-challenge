import Header from "../components/Header";
import Carousel from "../components/Carousel";
import GameList from "../components/GameList";
import supabase from "../supabase/games";
import Head from "next/head";

const index = ({ games }) => {
  return (
    <div className="bg-darkGray text-white font-sans">
      <Head>
        <title>STAEM Library</title>
      </Head>
      <Header />
      <Carousel games={games.slice(0, 6)} />
      <GameList data={games} />
    </div>
  );
};

export async function getStaticProps() {
  const { data, error } = await supabase.from("steam").select("*").range(0, 10);

  return {
    props: {
      games: data,
    },
  };
}

export default index;
