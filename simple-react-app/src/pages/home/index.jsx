import { useContext } from "react";
import { GlobalContext  } from "../../context";
import DogDetails from "../../components/dog-details"


export default function Home(){
    const {dogList, loading} = useContext(GlobalContext);
    if(loading) return <div>Loading...Please wait!</div>
    return(
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {dogList && dogList.length > 0 ? (
               
                dogList.map((item) =>  <DogDetails item= {item} />)

            ):(
                <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        Nothing to show. Please search something
                    </p>
                </div>

            )}
        </div>
    );
}