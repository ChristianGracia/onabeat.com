import React from "react";
import TextInput from "../common/text-input/text-input.component";

import { Button } from "react-bootstrap";
class RegisterForm extends React.Component {
  constructor() {
    super();

    this.state = {
      user: "",
      password: "",
      password2: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async onSubmit(e) {
    e.preventDefault();
    if (this.state.password === this.state.password2) {
      const newUser = {
        user: this.state.user,
        pass: this.state.password
      };
      console.log(newUser);
      const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser)
      };

      const response = await fetch(
        "http://www.onabeat.com/api/register/create-user",
        options
      );
      const content = await response.json();
      console.log(content);
    } else {
      alert("Passwords don't match");
    }
  }
  render() {
    return (
      <div
        className="m-auto"
        style={{ display: "flex", justifyContent: "center", width: "80%" }}
      >
        <form onSubmit={this.onSubmit}>
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
          <TextInput
            placeholder="Confirm password"
            name="password2"
            type="password"
            value={this.state.password2}
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

export default RegisterForm;
