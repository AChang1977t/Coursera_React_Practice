import React, { Component } from "react";
import Menu from "./MenuComponents"; // 匯入 Menu的資訊
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom"; // import components of react-router-dom
import { connect } from "react-redux";
import { addComment } from "../redux/ActionCreators"; // import action creators

// define mapStateToProps function which obtains the state as a parameter.
// the state is from Redux store
// return those to become available as props to maincomponent.js
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};

// create mapDispatch
const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment))
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // declare function component HomePage and using arrow function to define it.
    // and rendering featured dish/comment/promotion/leader
    // using homepage functional component that to pass these three attributes or props from home component
    // we set dish/comment/promotion/leader to mapStateToProps as state, so here should be as props that come in as properties for the mainComponent
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter(dish => dish.featured)[0]}
          promotion={this.props.promotions.filter(promo => promo.featured)[0]}
          leader={this.props.leaders.filter(leader => leader.featured)[0]}
        />
      );
    };

    // DishWithId function component, when this is invoke,
    // that will get parameter that is required.
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          selectDish={
            this.props.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
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
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          {/* for Contact component, if you don't need to pass any props, you don't need to use "state" */}
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

// connect component file to redux store
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
