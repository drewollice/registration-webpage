import React, { Component } from "react";

export default class TelephoneNumber extends Component {
  constructor() {
    super();
    this.state = {
      telephoneNumber: "",
      errorMsg: "",
    };
  }

  handleFieldBlur = (e) => {
    let error = "";
    if (e.target.value.length === 0) {
      error = "This is a mandatory field.";
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
        <label htmlFor="telephoneNumber">Telephone Number</label>
        <div>{this.renderError()}</div>
        <input
          className="form-control"
          id="telephoneNumber"
          required
          onBlur={this.handleFieldBlur}
        >
          {this.telephoneNumber}
        </input>
      </div>
    );
  }
}
