const GameTags = ({ tags }: { tags: string[] }) => {
  return (
    <div>
      {tags.map((t: string, i: number) =>
        i !== tags.length - 1 ? `${t}, ` : t
      )}
    </div>
  );
};

export default GameTags;
