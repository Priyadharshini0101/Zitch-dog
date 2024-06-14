import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

    return (
        <nav className="flex justify-between items-center p-8 container mx-auto flex-column lg:flex-row gap-5 lg:gap-0">
            <h2 className="text-4xl font-bold">
                <NavLink to={"/"}>Zitch Dog</NavLink>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="search"
                    value={searchParam}
                    onChange={(event) => setSearchParam(event.target.value)}
                    placeholder="Enter Items... "
                    className="bg-white/75 p-3 text-gray-600 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-yellow-100 focus:shadow-yellow-200" />
            </form>
            <ul className="flex gap-5  ">
                <li>
                    <NavLink to={"/"}
                        className={"text-yellow-500  hover:text-yellow-300 duration-300"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/favourites"}
                        className="text-yellow-500  hover:text-yellow-300 duration-300">
                        Favourites
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}