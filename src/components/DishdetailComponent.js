import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(selectDish) {
    return (
      // Card component
      <Card>
        <CardImg top src={selectDish.image} alt={selectDish.name} />
        <CardBody>
          <CardTitle>{selectDish.name}</CardTitle>
          <CardText>{selectDish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(selectDish) {
    const commentList = selectDish.comments.map(item => {
      return (
        <ul className="list-unstyled">
          <li>{item.comment}</li>
          <li>
            --{item.author} ,{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(item.date))}
          </li>
        </ul>
      );
    });
    if (selectDish.comments != null) {
      return (
        <div>
          <h4>Comments</h4>
          {commentList}
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    if (this.props.selectDish != null) {
      const { selectDish } = this.props;
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(selectDish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(selectDish)}
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default DishDetail;
