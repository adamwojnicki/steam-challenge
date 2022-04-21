import GameTags from "../GameTags";
interface Game {
  game: {
    title: string;
    image: string;
    tags: string[];
    price: number;
  };
}

const GameItem = ({ game }: Game) => {
  return (
    <div className="rounded-lg bg-dark my-3 flex flex-col md:flex-row overflow-hidden items-center">
      <figure className="w-full md:w-1/2 lg:1/3">
        <img className="w-full" src={game.image} alt="" />
      </figure>
      <div className="p-8 w-full md:w-1/2 lg:w-2/3">
        <div className="flex justify-between mb-6">
          <div>
            <h3 className="text-4xl font-semibold mb-4">{game.title}</h3>
            <GameTags tags={game.tags} />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--simple-icons text-darkBlue hidden md:block"
            width="48"
            height="48"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"
            ></path>
          </svg>
        </div>
        <div className="h-2 bg-darkBlue rounded-full w-48 mb-4"></div>
        <div className="text-2xl text-right">
          {game.price > 0 ? `$${game.price}` : `Free`}
        </div>
      </div>
    </div>
  );
};

export default GameItem;
