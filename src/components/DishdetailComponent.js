import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

// make two functions - RenderDish and RenderComments
function RenderDish({ selectDish }) {
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

function RenderComments({ selectDish }) {
  const commentList = selectDish.comments.map(item => {
    return (
      <ul key={item.id} className="list-unstyled">
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

// Functional component
const DishDetail = props => {
  if (props.selectDish != null) {
    // const { selectDish } = props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish selectDish={props.selectDish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments selectDish={props.selectDish} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default DishDetail;
