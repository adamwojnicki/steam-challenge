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
      <Carousel games={games.slice(0, 6)} />
      <GameList games={games} />
    </div>
  );
};

export async function getStaticProps() {
  const apikey = process.env.API_KEY;
  const Authorization = process.env.AUTH_KEY;
  const res = await fetch(
    "https://gqkuommdmfzmwkzdewma.supabase.co/rest/v1/steam?select=*&range=3,20",
    {
      headers: {
        apikey,
        Authorization,
      },
    }
  );
  console.log(res);

  const games = await res.json();

  return {
    props: {
      games,
    },
  };
}

export default index;
