import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    // define the state which reflects the info from the form.
    this.state = {
      firstName: "",
      lastName: "",
      telNum: "",
      eMail: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      // touched: track whether field (for validation) has been touched or not.
      touched: {
        firstName: false,
        lastName: false,
        telNum: false,
        eMail: false
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // set handleBlue method for handle "touched" part
  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  // set function validate
  validate(firstName, lastName, telNum, eMail) {
    const errors = {
      firstName: "",
      lastName: "",
      telNum: "",
      eMail: ""
    };

    // set validation
    if (this.state.touched.firstName && firstName.length < 3)
      errors.firstName = "First Name should be >= 3 character";
    else if (this.state.touched.firstName && firstName.length > 10)
      errors.firstName = "First Name should be <= 10 character";

    if (this.state.touched.lastName && lastName.length < 3)
      errors.lastName = "Last Name should be >= 3 character";
    else if (this.state.touched.lastName && lastName.length > 10)
      errors.lastName = "Last Name should be <= 10 character";

    const reg = /^\d+$/;
    if (this.state.touched.telNum && !reg.test(telNum))
      errors.telNum = "tel. Number should contain only numbers";

    if (
      this.state.touched.eMail &&
      eMail.split("").filter(x => x === "@").length !== 1
    )
      errors.eMail = "Email should contain a @";

    return errors;
  }

  handleSubmit(event) {
    console.log("current State is:" + JSON.stringify(this.state));
    alert("current State is:" + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    // invoke function validate in render function
    const errors = this.validate(
      this.state.firstName,
      this.state.lastName,
      this.state.telNum,
      this.state.eMail
    );

    // use onBlur to invoke handleBlur() / onChange to invoke handleInputChange
    // and set valid / invalid
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone" />: +852 1234 5678
              <br />
              <i className="fa fa-fax" />: +852 8765 4321
              <br />
              <i className="fa fa-envelope" />:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone" /> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype" /> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o" /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Send us Your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    valid={errors.firstName === ""}
                    invalid={errors.firstName !== ""}
                    onBlur={this.handleBlur("firstName")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.firstName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    valid={errors.lastName === ""}
                    invalid={errors.lastName !== ""}
                    onBlur={this.handleBlur("lastName")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.lastName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telNum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="telNum"
                    name="telNum"
                    placeholder="Tel. Number"
                    value={this.state.telNum}
                    valid={errors.telNum === ""}
                    invalid={errors.telNum !== ""}
                    onBlur={this.handleBlur("telNum")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.telNum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="eMail" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="eMail"
                    name="eMail"
                    placeholder="Email"
                    value={this.state.eMail}
                    valid={errors.eMail === ""}
                    invalid={errors.eMail !== ""}
                    onBlur={this.handleBlur("eMail")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.eMail}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />
                      {""}
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="12"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
