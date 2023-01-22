import React, {useState, useEffect} from 'react';
import ApexCharts from 'react-apexcharts';
import { useFetch } from "../../../hooks/useFetch";
import ConsumoApi from '../../../services/ConsumoApi';
import { END_POINT } from "../../../services/endPoints";

function Tracker3() {
    let dataSpain = useFetch(`${END_POINT}/historical/spain`)
    console.log(dataSpain)
    let evolutionSpain = Object.values(dataSpain.timeline.cases)
    let dates = Object.keys(dataSpain.timeline.cases)
    console.log(dates)
    
    let dataUSA = useFetch(`${END_POINT}/historical/usa`)
    console.log(dataUSA)
    let evolutionUSA = Object.values(dataUSA.timeline.cases)
    console.log(evolutionUSA)

    let dataItaly = useFetch(`${END_POINT}/historical/italy`)
    console.log(dataItaly)
    let evolutionItaly = Object.values(dataItaly)

    let dataGermany = useFetch(`${END_POINT}/historical/germany`)
    console.log(dataGermany)
    let evolutionGermany = Object.values(dataGermany) 
    
    const [options, setOptions] = useState({
        chart: {
          type: 'line',
          id:'testChart'
        },
        series: [{
          name: 'sales',
          data: [evolutionUSA]
        }],
        xaxis: {
          categories: dates
        }

      });
      
    return (
        <div id='testChart'>
             <ApexCharts options={options} id='testChart' series={options.series} type='line'/> 
        </div>
  );
}

export default Tracker3

    /* The upcoming code is a humble attempt to build a custom hook 
     that upgrades the previous code. 
    
    const useEvolution = (country) => {
      const [evolution, setEvolution] = useState([]);

      useEffect(() => {
        function setEvolution(country) {
          let data = useFetch(`${END_POINT}/historical/${country}`).slice(0,10)
          let evolution = Object.values(data.timeline.cases)
          return evolution
        };
  });
}

const useDates = () => {
  const [dates, setDates] = useState([])
      
  useEffect(() => {
    function setDates() {
      let data = useFetch(`${END_POINT}/historical/`).slice(0,10)
      let dates = Object.keys(data.timeline.cases)
      return dates
    };
  }); */