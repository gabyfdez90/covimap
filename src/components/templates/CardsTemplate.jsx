import React from "react";
import Card from 'react-bootstrap/Card';
import Cards from '../atoms/cards';

const CardsTemplate = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <Cards
            imgSrc="./img/icons/cough.svg"
            title="Cough"
            text="Coughing is another key symptom, but it's not just any cough, said Schaffner. It should be a dry cough that you feel in your chest."
          />
        </Carousel.Item>
        <Carousel.Item>
          <Cards
            imgSrc=""
            title="Difficulty Breathing"
            text="Shortness of breath can be a third --and very serious-- manifestation of Covid-19, and it can occur on its own, without a cough."
          />
        </Carousel.Item>
        <Carousel.Item>
          <Cards
            imgSrc=""
            title="Fever"
            text="Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100."
          />
        </Carousel.Item>
      </Carousel>
    );
  }


  export default CardsTemplate;