import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context";


export default function DogDetails({ item }) {

    const { name, breed_group, reference_image_id } = item?.breeds[0];
    console.log(reference_image_id);
    return (
        <div  key={reference_image_id} className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
            <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
                <img src={item?.url} alt="recipe item" className="block w-full" />
            </div>

            <span className="text-sm text-gray-600 font-medium">
                {name || 'Not Available'}
            </span>
            <h3 className="font-bold text-2xl truncate text-yellow-800">
                {breed_group || 'Not Available'}
            </h3>

            <div>
                <Link
                    to={`/dog-details/${reference_image_id}`}
                    className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-yellow-500 hover:bg-yellow-300 text-white"
                >
                    Details
                </Link>
            </div>
        </div>
    );

}