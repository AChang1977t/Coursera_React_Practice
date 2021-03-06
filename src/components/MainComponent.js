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
import {
  postComment,
  postFeedback,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders
} from "../redux/ActionCreators"; // import action creators
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group"; // make animates

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
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: feedback => dispatch(postFeedback(feedback)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },
  fetchPromos: () => {
    dispatch(fetchPromos());
  },
  fetchLeaders: () => {
    dispatch(fetchLeaders());
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  // lifecycle method
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    // declare function component HomePage and using arrow function to define it.
    // and rendering featured dish/comment/promotion/leader
    // using homepage functional component that to pass these three attributes or props from home component
    // we set dish/comment/promotion/leader to mapStateToProps as state, so here should be as props that come in as properties for the mainComponent
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={
            this.props.promotions.promotions.filter(promo => promo.featured)[0]
          }
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader={
            this.props.leaders.leaders.filter(leader => leader.featured)[0]
          }
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess}
        />
      );
    };

    // DishWithId function component, when this is invoke,
    // that will get parameter that is required.
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          selectDish={
            this.props.dishes.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
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
        {/* configure the animation */}
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route
                exact
                path="/menu"
                component={() => <Menu dishes={this.props.dishes} />}
              />
              <Route path="/menu/:dishId" component={DishWithId} />
              {/* for Contact component, if you don't need to pass any props, you don't need to use "state" */}
              <Route
                exact
                path="/contactus"
                component={() => (
                  <Contact
                    resetFeedbackForm={this.props.resetFeedbackForm}
                    postFeedback={this.props.postFeedback}
                  />
                )}
              />
              <Route
                exact
                path="/aboutus"
                component={() => <About leaders={this.props.leaders} />}
              />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
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
