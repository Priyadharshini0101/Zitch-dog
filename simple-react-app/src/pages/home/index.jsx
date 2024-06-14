import { useContext } from "react";
import { GlobalContext  } from "../../context";
import DogDetails from "../../components/dog-details"


export default function Home(){
    const {dogList, loading} = useContext(GlobalContext);
    if(loading) return <div className="text-yellow-800 text-center font-semibold">Loading...Please wait!</div>
    return(
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {dogList && dogList.length > 0 ? (
               
                dogList.map((item) =>  <DogDetails item= {item} />)

            ):(
                <div>
                    <p className="lg:text-4xl text-xl text-center text-yellow-800 font-extrabold">
                        Nothing to show. Please search something
                    </p>
                </div>

            )}
        </div>
    );
}