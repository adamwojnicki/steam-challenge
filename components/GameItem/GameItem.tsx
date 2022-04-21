import GameTags from "../GameTags";
import GamePlatforms from "../GamePlatforms";
interface Game {
  game: {
    title: string;
    image: string;
    tags: string[];
    platforms: string[];
    price: number;
  };
}

const GameItem = ({ game }: Game) => {
  return (
    <div className="rounded-lg bg-dark my-3 flex flex-col lg:flex-row overflow-hidden items-center">
      <figure className="w-full lg:w-1/2">
        <img className="w-full object-cover" src={game.image} alt="" />
      </figure>
      <div className="p-4 xl:p-8 w-full lg:w-1/2">
        <div className="flex justify-between mb-6">
          <div className="w-full md:w-3/4">
            <h3 className="text-2xl xl:text-4xl font-semibold mb-4">
              {game.title}
            </h3>
            <GameTags tags={game.tags} />
          </div>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--simple-icons text-darkBlue hidden md:block w-12 h-12"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"
            ></path>
          </svg> */}
          <GamePlatforms platforms={game.platforms} />
        </div>
        <div className="h-2 bg-darkBlue rounded-full w-48 mb-4"></div>
        <div className="flex justify-between items center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--simple-icons text-darkBlue block md:hidden w-10 h-10"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"
            ></path>
          </svg>
          <div className="text-2xl mr-0 ml-auto text-right font-semibold">
            {game.price > 0 ? `$${game.price}` : `Free`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
