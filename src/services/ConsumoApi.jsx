import react from "react";
import { useFetch } from "../hooks/useFetch";
import { END_POINT } from "./endPoints";

const ConsumoApi = () => {
  const data = useFetch(`${END_POINT}/countries`);
  return data;
};

export default ConsumoApi;
