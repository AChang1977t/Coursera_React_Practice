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
          <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    console.log("Menu Component render is invoked");

    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Menu;
