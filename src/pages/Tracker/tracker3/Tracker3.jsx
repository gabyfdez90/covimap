import React, {useState} from 'react';
import ApexCharts from 'react-apexcharts';
import { useFetch } from "../../../hooks/useFetch";
import { END_POINT } from "../../../services/endPoints";

function Tracker3() {
    const {data} = useFetch(`${END_POINT}/historical/spain`)
    console.log(data)
    const countryList = data.timeline.cases
    
    
    const [options, setOptions] = useState({
        chart: {
          type: 'line',
          id:'testChart'
        },
        series: [{
          name: 'sales',
          data: [{data}]
        }],
        xaxis: {
          categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
        }

      });
      
    return (
        <div id='testChart'>
            <ApexCharts options={options} id='testChart' series={options.series} type='line'/>
        </div>
  );
}

export default Tracker3