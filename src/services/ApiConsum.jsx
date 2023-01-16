import {useState, useEffect } from "react";
const ApiConsum = (endPoint) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(endPoint)
        .then(async (response) => {
        if (response.ok) setData(await response.json());
      });
    }, );
    return data;
}
export default ApiConsum;