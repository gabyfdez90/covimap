import React from 'react';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import{MdOutlineCoronavirus} from'react-icons/md';


function CasesConter() {
    const [data, setData] = useState([]);
        useEffect(() => {
        
        fetch((`${END_POINT}/countries/usa`))
            .then(response => response.json())
            .then(data => {
                setData(data);
                
            });
    }, []);

    return (
        <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title></Card.Title>
             <MdOutlineCoronavirus id='covid'color='lightblue'/>
            {/* <Card.Subtitle className="mb-2 text-muted">{totalCases}</Card.Subtitle> */}
            {/* <Card.Text>{totalCases}</Card.Text> */}
               
            </Card.Body>
        </Card>
     
   );
}
        
    


export default CasesConter;
