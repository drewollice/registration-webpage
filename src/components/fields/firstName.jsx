import React, { Component } from "react";

export default class FirstName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
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
        <label htmlFor="firstName">First Name</label>
        <div>{this.renderError()}</div>
        <input
          className="form-control"
          id="firstName"
          required
          onBlur={this.handleFieldBlur}
        >
          {this.firstName}
        </input>
      </div>
    );
  }
}
