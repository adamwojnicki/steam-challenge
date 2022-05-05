import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface Game {
  id: string;
  image: string;
  link: string;
  title: string;
}

const Carousel = ({ games }) => {
  return (
    <section className="container py-6">
      <Splide
        className="max-w-4xl mx-auto"
        options={{
          perPage: 1,
          rewind: true,
          gap: "1rem",
        }}
      >
        {games.map((g: Game) => (
          <SplideSlide key={g.id}>
            <a href={g.link}>
              <img className="w-full rounded-xl" src={g.image} alt={g.title} />
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Carousel;
