import React from 'react';
import FlashCardForm from "./components/FlashCardForm";
import FlashCards from "./components/FlashCards";
import { Button, Container, Header, } from "semantic-ui-react"

class App extends React.Component {
  state = { 
    cards: [
      { id: 1, front: "MVC", back: "Models, Views, Controllers", },
      { id: 2, front: "state", back: "JS Object", },
      { id: 3, front: "array", back: "Index based list of data", }, 
    ], 
    showForm: false,
  };
  
  getId = () => Math.floor((1 + Math.random()) * 10000);

  addCard = (cardData) => {
    const card = { id: this.getId(), ...cardData, }
    this.setState({ cards: [card, ...this.state.cards], });
  };

  editCard = (cardData) => {
    const cards = this.state.cards.map( card => {
      if (card.id === cardData.id)
        return cardData;
      return card;
    });
    this.setState({ cards, });
  };

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card;
    });
    this.setState({ cards, });
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm, });
  };

  render() {
    return (
      <Container style={styles.container} textAlign="center">
        <Header as="h1">React Flash Cards</Header>
        <br />
        <Button onClick={this.toggleForm}>Toggle Form</Button>
        <br />
        { this.state.showForm && <FlashCardForm add={this.addCard} /> }
        <br />
        <FlashCards 
          flashCards={this.state.cards} 
          edit={this.editCard} 
          remove={this.removeCard}
        />
      </Container>
    );
  };
};

const styles = {
  container: {
    marginTop: "25px",
  },
};

export default App;
