import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
 
  const { reference_image_id } = useParams();
  console.log(reference_image_id);
  const {

    dogDetailsData,
    setDogDetailsData,
    favouritesList,
    handleAddTofavourite,
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
            className="w-full h-full object-cover block group-hover:scale-100 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center">
      <h3 className="font-semibold text-xl truncate text-gray-600">
          Name : {name}
        </h3>
        <h3 className="font-semibold text-xl truncate text-gray-600">
          Bred For : {bred_for}
        </h3>
        <h3 className="font-semibold text-xl truncate text-gray-600">
          Bred Group : {breed_group}
        </h3>
        <h3 className="font-semibold text-xl truncate text-gray-600">
          Life Span : {life_span}
        </h3>
        <h3 className="font-semibold text-xl truncate text-gray-600">
          Temperament : {temperament}
        </h3>
        <h3 className="font-semibold text-xl truncate text-gray-600">
          Origin : {origin}
        </h3>
        <div>
          <button
            onClick={() => handleAddTofavourite(dogDetailsData)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-yellow-500 text-white hover:bg-yellow-300"
          >
            {favouritesList && favouritesList.length > 0 && favouritesList.findIndex(
              (item) => item.id === dogDetailsData?.id
            ) !== -1
              ? "Remove from favourites"
              : "Add to favourites"}
          </button>
        </div>  
      </div>
      </div>
  );
}