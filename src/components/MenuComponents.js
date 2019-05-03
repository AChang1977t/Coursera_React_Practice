import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    // define a state for components,
    this.state = {
      // property call
      // null initially which means that i haven't selected any,
      // so whenever I click on any one of dishes,
      // then that will make the dish information become equal to the selected.Dish
      selectedDish: null
    };
  }

  //Implement this onDishSelect.
  // Received the dish as the parameter,
  onDishSelect(dish) {
    // Using this.setState function call,
    // inside "dish" will be set equal to the dish which received as the parameter.
    this.setState({ selectedDish: dish });
  }

  // Render the details of the dish
  // this is card construct for selected dish when render it on the screen there using the card.
  renderDish(dish) {
    if (dish != null)
      return (
        // Card component
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else {
      return <div />;
    }
  }

  render() {
    // use "props"
    const menu = this.props.dishes.map(dish => {
      // and then do return a lay out for the dish here
      return (
        // "key" will enable it to identify each of those elements uniquely.
        // the CardImg to render the image.
        // onClick method, when it's clicked, it is going to call the function which
        // implement in a short while called "this.DishSelect",
        // and then pass the dish information as a parameter to that.
        // So, when it's clicked on the card, that card is passed into this method call "onDishSelect".
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
