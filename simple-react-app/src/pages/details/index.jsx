import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
 
  const { reference_image_id } = useParams();
  console.log(reference_image_id);
  const {

    dogDetailsData,
    setDogDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);
  useEffect(() => {
    async function getDogDetails() {
        setDogDetailsData([]);
    try{
      const response = await fetch(
        `https://api.thedogapi.com/v1/images/${reference_image_id}`
      );
      const data = await response.json();

      console.log(data);
      if (data != null) {
        setDogDetailsData(data);
      }
    }catch(e){
        console.log(e);
    }
}

    getDogDetails();
  }, []);

  const name = dogDetailsData?.breeds?.[0]?.name || 'Not Available'

  const bred_for = dogDetailsData?.breeds?.[0]?.bred_for || "Not Available"; // Access nested data with optional chaining
  const breed_group = dogDetailsData?.breeds?.[0]?.breed_group || "Not Available";
  const life_span = dogDetailsData?.breeds?.[0]?.life_span || "Not Available";
  const temperament = dogDetailsData?.breeds?.[0]?.temperament || "Not Available";
  const origin = dogDetailsData?.breeds?.[0]?.origin || "Not Available";
  
  return (
    
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={dogDetailsData?.url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
      <h3 className="font-bold text-2xl truncate text-black">
          Name : {name}
        </h3>
        <h3 className="font-bold text-2xl truncate text-black">
          Bred For : {bred_for}
        </h3>
        <h3 className="font-bold text-2xl truncate text-black">
          Bred Group : {breed_group}
        </h3>
        <h3 className="font-bold text-2xl truncate text-black">
          Life Span : {life_span}
        </h3>
        <h3 className="font-bold text-2xl truncate text-black">
          Temperament : {temperament}
        </h3>
        <h3 className="font-bold text-2xl truncate text-black">
          Origin : {origin}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(dogDetailsData)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-rose-800 text-white"
          >
            {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
              (item) => item.id === dogDetailsData?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>  
      </div>
      </div>
  );
}