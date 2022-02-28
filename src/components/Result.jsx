import React from "react";
import { Component } from "react";
import "./Style.css";

export class Result extends Component {
  render() {
    return (
      <div className="feedback">
        <h1 id="heading">EMPLOYEE FEEDBACK DATA</h1>
        <br></br>
        <div id="feedsys">
          {this.props.feedback.map((value, index) => {
            return (
              <p id="details">
                Name: {value.name} || Department:{value.department} || Rating:
                {value.rating}
              </p>
            );
          })}
        </div>
        <br />
        <div className="back">
          <button id="backbut" onClick={() => this.props.back()}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
}
