import { useState, useEffect } from "react";

export const endPoint = ("https://disease.sh/v3/covid-19/countries/usa");

//const search = "all";

const ConsumoApi = (endPoint) =>{
    
    const [data, setData] = useState([]);
    useEffect( () => {
        const api = async(endPoint) => {
             let fetchData = await fetch(endPoint);
             console.log(fetchData);

             let dataToJson = await fetchData.json();
             setData(dataToJson);
             console.log(dataToJson);
        }
      api(endPoint);
    },[endPoint]);
     
    return data
    
} 


export default ConsumoApi