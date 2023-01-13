import React from "react";
import Cards from "../atoms/cards/Cards";
import { Carousel } from "react-bootstrap";
import { CardDeck, CardGroup } from "react-bootstrap";

const CardsTemplate = () => {
  return (
  <CardDeck>
  <CardGroup>
  <Cards
           imgSrc="Cough"
           title="Cough"
           text="Coughing is another key symptom, but it's not just any cough, said Schaffner. It should be a dry cough that you feel in your chest."
         />
  <Cards
           imgSrc=""
           title="Difficulty Breathing"
           text="Shortness of breath can be a third --and very serious-- manifestation of Covid-19, and it can occur on its own, without a cough."
         />
  <Cards
           imgSrc=""
           title="Fever"
           text="Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100."
         />
  </CardGroup>
  </CardDeck>
  );
  }
  
  export default CardsTemplate;