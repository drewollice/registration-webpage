import React, { Component } from "react";
import EmailAddress from "./fields/emailAddress";
import TelephoneNumber from "./fields/telephoneNumber";
import BusinessAddress from "./fields/businessAddress";
import NpiNumber from "./fields/npiNumber";
import LastName from "./fields/lastName";
import FirstName from "./fields/firstName";
import Register from "./buttons/register";
import Cancel from "./buttons/cancel";
import Pic from "../resources/logo.png";

export default class Registration extends Component {
  constructor() {
    super();
    this.state = {
      formValid: false,
    };
  }

  render() {
    return (
      <form style={{ textAlign: "center" }}>
        <div className="jumbotron">
          <img src={Pic} alt="Availity Logo" />
          <h1>Availity Registration Form</h1>
          <h3>Complete the fields and click Register to begin</h3>
        </div>

        <FirstName formValid={this.state.formValid} />
        <LastName formValid={this.state.formValid} />
        <NpiNumber formValid={this.state.formValid} />
        <BusinessAddress formValid={this.state.formValid} />
        <TelephoneNumber formValid={this.state.formValid} />
        <EmailAddress formValid={this.state.formValid} />
        <Register formValid={this.state.formValid} />
        <Cancel />
      </form>
    );
  }
}
