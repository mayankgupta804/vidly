import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted");
  };

  handleChange = ({currentTarget: input}) => {
    const account = {
      ...this.state.account,
    };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {

    const { account } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} action="">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
              value={account.username}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="text"
              value={account.password}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div>
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
