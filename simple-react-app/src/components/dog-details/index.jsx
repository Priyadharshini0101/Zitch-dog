import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context";


export default function DogDetails({ item }) {

    const { searchParam } = useContext(GlobalContext);
    const { name, breed_group, reference_image_id } = item?.breeds[0];
    console.log(reference_image_id);
    return (
        <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
            <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
                <img src={item?.url} alt="recipe item" className="block w-full" />
            </div>

            <span className="text-sm text-green-700 font-medium">
                {name}
            </span>
            <h3 className="font-bold text-2xl truncate text-black">
                {breed_group}
            </h3>

            <div>
                <Link
                    to={`/dog-details/${reference_image_id}`}
                    className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-green-600 text-white"
                >
                    Details
                </Link>
            </div>
        </div>
    );

}