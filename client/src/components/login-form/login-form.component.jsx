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
  onSubmit(e) {
    // e.preventDefault();
    // if (this.state.password === this.state.password2) {
    //   var url = new URL("http://localhost:8080/create");
    //   const options = {
    //     method: "post",
    //     accepts: new Headers({ "content-type": "application/json" })
    //   };
    //   options.body = [this.state.user, this.state.password];
    //   (async () => {
    //     const response = await fetch(url, options);
    //     const content = await response.json();
    //     console.log(content);
    //     if (content) {
    //       window.location.href = "/";
    //       console.log("success");
    //     } else {
    //       alert("Username in use");
    //     }
    //   })();
    // } else {
    //   alert("Passwords don't match");
    // }
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
