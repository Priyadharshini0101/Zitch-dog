import { useContext } from "react";
import { GlobalContext } from "../../context";
import DogDetails from "../../components/dog-details";

export default function Favourites() {
  const { favouritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item) => <DogDetails item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-yellow-800 font-extrabold">
            Nothing is added in favourites.
          </p>
        </div>
      )}
    </div>
  );
}