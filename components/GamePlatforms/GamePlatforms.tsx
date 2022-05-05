import { Apple, Windows, Linux } from "./icons";

const GamePlatforms = ({ platforms }: { platforms: string[] }) => {
  const ic = {
    Apple: <Apple className="mx-1 w-6 h-6 text-darkBlue" />,
    Windows: <Windows className="mx-1 w-6 h-6 text-darkBlue" />,
    Linux: <Linux className="mx-1 w-6 h-6 text-darkBlue" />,
  };
  return (
    <div className="flex">
      {platforms.map((p) => (
        <div key={p}>{ic[p]}</div>
      ))}
    </div>
  );
};

export default GamePlatforms;
