import React from "react";
import { useState, useEffect} from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  //const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      //setLoading(false);
      console.log(json);
    };

    fetchData();
  }, [url]); //array de dependencia

  return {data}; //loading
};
