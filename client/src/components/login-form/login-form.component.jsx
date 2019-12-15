import React from "react";
import TextInput from "../common/text-input/text-input.component";
import { connect } from "react-redux";
import { login } from "../../reducers/reducer";
import { withRouter } from "react-router";

import { Button } from "react-bootstrap";
class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      user: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async onSubmit(e) {
    e.preventDefault();

    const user = {
      user: this.state.user,
      pass: this.state.password
    };
    console.log(user);
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user)
    };

    const response = await fetch(
      "http://www.onabeat.com/api/login/login-user",
      options
    );
    const content = await response.json();
    console.log(content);
  }
  render() {
    return (
      <div
        className="m-auto"
        style={{ display: "flex", justifyContent: "center", width: "80%" }}
      >
        <form className="mr-0 ml-0" onSubmit={this.onSubmit}>
          <TextInput
            placeholder="Username"
            name="user"
            type="user"
            value={this.state.user}
            onChange={this.onChange}
          />

          <TextInput
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
          />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
