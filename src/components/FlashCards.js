import React from "react";
import FlashCard from "./FlashCard";
import { Card, } from "semantic-ui-react";

const FlashCards = (props) => (
  <Card.Group itemsPerRow={3}>
    { props.flashCards.map( card => (
        <FlashCard 
          key={card.id} 
          { ...card } 
          edit={props.edit} 
          remove={props.remove}
        />
    ))}
  </Card.Group>
);

export default FlashCards;
