import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi, { log } from "joi-browser";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} action="">
          <Input
            name="username"
            value={data.username}
            label="Username"
            error={errors.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            error={errors.password}
            onChange={this.handleChange}
          />
          <div>
            <button disabled={this.validate()} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
