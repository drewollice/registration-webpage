import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div>
        <button
          type="submit"
          disabled
          className="btn btn-primary btn-md"
          style={{ margin: "10px" }}
        >
          Register
        </button>
      </div>
    );
  }
}
