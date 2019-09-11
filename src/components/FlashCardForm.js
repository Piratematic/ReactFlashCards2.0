import React from "react";
import { Form, } from "semantic-ui-react";

class FlashCardForm extends React.Component {
  state = { front: "", back: "", };

  componentDidMount() {
    if (this.props.card) {
      const { front, back, } = this.props.card;
      this.setState({ front, back, });
    };
  };
  
  handleChange = (e, { name, value, }) => {
    this.setState({ [name]: value, });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.card) {
      this.props.edit({ ...this.state, id: this.props.card.id, });
      this.props.toggleEdit();
    } else {
      this.props.add(this.state);
    }
  };

  render() {
    const { front, back, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          name="front"
          label="Card Front"
          placeholder="Card Front"
          value={front}
          onChange={this.handleChange}
          required
        />
        <Form.Input 
          name="back"
          label="Card Back"
          placeholder="Card Back"
          value={back}
          onChange={this.handleChange}
          required
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  };
};

export default FlashCardForm;
