import {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({children}){
    const [searchParam, setSearchParam] = useState("");
    const [loading ,setLoading] = useState(false);
    const [dogList, setDogList] = useState([]);
    const [dogDetailsData, setDogDetailsData] = useState(null);
    const [favouritesList, setfavouritesList] = useState([]);

    const navigate = useNavigate()
  
    async function getImage(item){
        try{
            const res1 = await fetch(
                `https://api.thedogapi.com/v1/images/${item.reference_image_id}`
            );
            const data1 = await res1.json();
            if(data1){
                setDogList((prevList) => [...prevList,data1]);
            }
        }catch(e){
            console.log(e)

        }
    }

    async function handleSubmit(event){
        event.preventDefault();
       
        try{
            setLoading(true)
            setDogList([])
            const res = await fetch(
                `https://api.thedogapi.com/v1/breeds`
            );
            const data = await res.json();
          
           if(data){
                const filteredBreeds = data.filter((item) => item.name.includes(searchParam));
                const imagePromises = filteredBreeds.map((breed) => getImage(breed));
                await Promise.all(imagePromises)
           }
            
            setLoading(false);
            setSearchParam("");
            navigate('/')
           
        }catch{
            console.log(event);
            setLoading(false);
            setSearchParam("");
        }
    }

    function handleAddTofavourite(getCurrentItem){
        let cpyfavouritesList = [...favouritesList];
        const index = cpyfavouritesList.findIndex(item => item.id === getCurrentItem.id)
        if(index === -1){
            cpyfavouritesList.push(getCurrentItem)
        }else{
            cpyfavouritesList.splice(index,1)
        }
        setfavouritesList(cpyfavouritesList)
    }
    return( <GlobalContext.Provider
    value={{
        searchParam,setSearchParam,handleSubmit,loading,dogDetailsData,setDogDetailsData,dogList,setfavouritesList,favouritesList, handleAddTofavourite
    }}>
        {children}
    </GlobalContext.Provider>);
}