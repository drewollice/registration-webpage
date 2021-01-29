import React, { Component } from "react";

export default class BusinessAddress extends Component {
  constructor() {
    super();
    this.state = {
      businessAddress: "",
      errorMsg: "",
    };
  }

  handleFieldBlur = (e) => {
    this.setState({
      errorMsg: e.target.value.length === 0 ? "This is a mandatory field." : "",
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
        <label htmlFor="businessAddress">Business Address</label>
        <div>{this.renderError()}</div>
        <input
          className="form-control"
          id="businessAddress"
          required
          onBlur={this.handleFieldBlur}
        >
          {this.businessAddress}
        </input>
      </div>
    );
  }
}
