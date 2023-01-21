import react from "react";
import { useFetch } from "../hooks/useFetch";
import { END_POINT } from "./endPoints";


const ConsumoApi = () =>{
      const {data, loading} = useFetch(`${END_POINT}/all`);
} 

export default ConsumoApi;