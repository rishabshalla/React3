import React, { Component } from "react";
import { Result } from "./Result";
import "./Style.css";

export class From extends Component {
  state = {
    name: "",
    department: "",
    rating: "",
    user: [],
    showForm: true,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  OnSubmit(event) {
    event.preventDefault();

    const Obj = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
      showForm: this.state.showForm,
    };

    const tempArr = this.state.user;
    tempArr.push(Obj);
    this.setState({ user: tempArr, showForm: !this.state.showForm });
  }

  goback = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  render() {
    return (
      <>
        {this.state.showForm ? (
          <div className="container">
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <br></br>
            <form action="">
              <label for="name">Name : </label>
              <input
                type="text"
                id="name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
                required
              />
              <br></br>
              <br></br>
              <label for="department">Department : </label>
              <input
                type="text"
                id="department"
                value={this.state.department}
                name="department"
                onChange={this.handleChange}
                required
              />
              <br></br>
              <br></br>
              <label for="rating">Rating : </label>
              <input
                type="number"
                id="rating"
                value={this.state.rating}
                name="rating"
                onChange={this.handleChange}
                required
              />
              <br></br>
              <br></br>
            </form>
            <button type="submit" onClick={this.OnSubmit.bind(this)}>
              Submit
            </button>
          </div>
        ) : (
          <Result feedback={this.state.user} back={this.goback} />
        )}
      </>
    );
  }
}
