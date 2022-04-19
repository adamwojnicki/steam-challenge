import React from "react";
import dotenv from "dotenv/config";

const index = ({ games }) => {
  return (
    <div className="text-green-600">
      {games.map((g) => (
        <p key={g.id}>{g.title}</p>
      ))}
      {/* HEADER */}
      {/* CAROUSEL */}
      {/* GAME LIST */}
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
