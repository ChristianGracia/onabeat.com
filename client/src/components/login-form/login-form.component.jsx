import React from "react";
import TextInput from "../common/text-input/text-input.component";
import { connect } from "react-redux";
import { login } from "../../reducers/reducer";
import { withRouter } from "react-router";

import { Button } from "react-bootstrap";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: "",
      isLoginSuccess: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    let user = this.state.user;
    let password = this.state.password;

    if (user === "") {
      alert("You have not entered a username");
    } else if (password === "") {
      alert("You have not entered a password");
    }
    else {
      this.props.login(user, password);
      this.setState({ user: "", password: "" });

    }

  }

  componentDidUpdate(prevProps) {
    if (this.props.isLoginSuccess !== prevProps.isLoginSuccess) {
      this.props.history.push({
        pathname: "/dashboard",
        state: { isLoginSuccess: true }
      });
    }
  }
  render() {
    return (
      <div
        className="m-auto"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "80%",
          maxWidth: 600,
          flexDirection: "column"
        }}
      >
        {this.props.loginError && (
          <div
            style={{
              color: "red",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 5
            }}
          >
            {this.props.loginError.message}
          </div>
        )}
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
            <Button type="submit" variant="dark">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user, password) => dispatch(login(user, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
