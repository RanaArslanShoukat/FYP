import React, { Component } from "react";
import signin from "./images/signin.PNG";
import { auth } from "./firebase";
export class Signin extends Component {
  state = {
    account: { email: "", password: "" },
  };
  handleInput = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  handleLogin = () => {
    const { account } = this.state;
    auth
      .signInWithEmailAndPassword(account.email, account.password)
      .then(() => {
        this.props.history.push("/Home");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    const { email, password } = this.state.account;
    return (
      <>
        <section className="vh-100 user">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src={signin}
                  className="img-fluid mt-5 mb-1 p-5"
                  alt={signin}
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleInput}
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" for="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleInput}
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Signin;
