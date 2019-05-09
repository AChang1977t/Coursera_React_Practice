import React, { Component } from "react";
import Menu from "./MenuComponents"; // 匯入 Menu的資訊
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderCommponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom"; // import components of react-router-dom

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // define the state here
      dishes: DISHES // JS Object
      // remove => SelectedDish: null
    };
  }

  // //Implement this onDishSelect.
  // // Received the dish as the parameter,
  // onDishSelect(dishId) {
  //   // Using this.setState function call,
  //   // inside "dish" will be set equal to the dish which received as the parameter.
  //   this.setState({ selectedDish: dishId });
  // }

  render() {
    // declare function component HomePage and using arrow function to define it.
    const HomePage = () => {
      return <Home />;
    };
    return (
      // Using MainComponent to navigate (two routes) HomeComponent and MenuComponent
      // <Switch> ==> Enclose a couple of routes into MainComponent
      // here, component won't allow pass any props to menuComponent, so it must pass function component menu,
      // use () => <Menu dishes={this.state.dishes}/> to pass props to menuComponent
      // <Redirect/> => default path (/home)
      // this part affect about the router(URL: https://xxxxx/home or https://xxxxx/meun)
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.onDishSelect(dishId)}
        />
        <DishDetail
          selectDish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDish
            )[0]
          }
        /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
