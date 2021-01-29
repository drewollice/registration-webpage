import React, { Component } from "react";

export default class EmailAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      errorMsg: "",
    };
  }

  handleFieldBlur = (e) => {
    let error = "";
    if (e.target.value.length === 0) {
      error = "This is a mandatory field.";
    } else if (!e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      error = "This email address is invalid.";
    }

    this.setState({
      errorMsg: error,
    });
  };

  renderError() {
    if (this.state.errorMsg.length === 0) {
      return null;
    }
    return <p className="error">{this.state.errorMsg}</p>;
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="emailAddress">Email Address</label>
        <div>{this.renderError()}</div>
        <input
          className="form-control"
          id="emailAddress"
          required
          onBlur={this.handleFieldBlur}
        >
          {this.emailAddress}
        </input>
      </div>
    );
  }
}
