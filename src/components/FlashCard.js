import React from "react";
import FlashCardForm from "./FlashCardForm";
import { Button, Card, } from "semantic-ui-react";

class FlashCard extends React.Component {
  state = { showBack: false, editing: false, };

  toggleCard = () => {
    this.setState({ showBack: !this.state.showBack, });
  };

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing, });
  };

  render() {
    const { showBack, } = this.state;
    const { back, front, remove, id, } = this.props;
    return (
      <Card>
        {
          this.state.editing ?
            <FlashCardForm 
              card={this.props} 
              edit={this.props.edit} 
              toggleEdit={this.toggleEdit} 
            />
          :
            <>
              <Card.Content onClick={this.toggleCard}>
                <Card.Header>
                  { showBack ? back : front }
                </Card.Header>          
              </Card.Content>
              <Card.Content extra>
                <Button color="yellow" onClick={this.toggleEdit}>Edit</Button>
                <Button color="red" onClick={() => remove(id)}>Delete</Button>
              </Card.Content>
            </>
        }
      </Card>
    );
  };
};

export default FlashCard;
