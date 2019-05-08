import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponents"; // 匯入 Menu的資訊
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";

// container component -> parenet component
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // define the state here
      dishes: DISHES, // JS Object
      SelectedDish: null
    };
  }

  //Implement this onDishSelect.
  // Received the dish as the parameter,
  onDishSelect(dishId) {
    // Using this.setState function call,
    // inside "dish" will be set equal to the dish which received as the parameter.
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      // there are two part UI here: 1. navbar; 2. Menu.
      // Menu dishes => make dishes available as props to the menu component
      // Menu "dishes" that is defined in the state (as above "this.state =") for App component
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.onDishSelect(dishId)}
        />
        <DishDetail
          selectDish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDish
            )[0]
          }
        />
      </div>
    );
  }
}

export default Main;
