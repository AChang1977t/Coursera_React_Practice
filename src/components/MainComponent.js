import React, { Component } from "react";
import Menu from "./MenuComponents"; // 匯入 Menu的資訊
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderCommponent";
import Footer from "./FooterComponent";

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
        <Header />
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
        <Footer />
      </div>
    );
  }
}

export default Main;
