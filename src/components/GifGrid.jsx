import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGif(category);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h3>{category}</h3>
          <div className="card-grid">
            {images.map((image) => (
              <GifItem key={image.id} {...image} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
