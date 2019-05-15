import React, { Component } from "react";
import Menu from "./MenuComponents"; // 匯入 Menu的資訊
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom"; // import components of react-router-dom

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // define the state here
      dishes: DISHES, // JS dishes Object
      comments: COMMENTS, // comments Object
      leaders: LEADERS, // leaders Object
      promotions: PROMOTIONS // promotions Object
    };
  }

  render() {
    // declare function component HomePage and using arrow function to define it.
    // and rendering featured dish/comment/promotion/leader
    // using homepage functional component that to pass these three attributes or props from home component
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter(dish => dish.featured)[0]}
          promotion={this.state.promotions.filter(promo => promo.featured)[0]}
          leader={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      );
    };

    // DishWithId function component, when this is invoke,
    // that will get parameter that is required.
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          selectDish={
            this.state.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      // Using MainComponent to navigate (routes) HomeComponent and MenuComponent
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
          <Route path="/menu/:dishId" component={DishWithId} />
          {/* for Contact component, if you don't need to pass any props, you don't need to use "state" */}
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
