import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    // initialise the gapi auth library, including the scope that we'll ask for
    // window shows that gapi is available on the window scope
    window.gapi.load("client:auth2", async () => {
      await window.gapi.client.init({
        clientId:
          "279259768166-fpt23k63n06t4vihc4klmuo3tk8titrn.apps.googleusercontent.com",
        scope: "email profile",
      });

      // after the load fn is complete, it returns a promise
      // this.auth gets fns and the current auth status
      this.auth = window.gapi.auth2.getAuthInstance();
      // re render the component to get the auth status (logged in or not)
      this.onAuthChange(this.auth.isSignedIn.get()) // initial call to action creators on render
      this.auth.isSignedIn.listen(this.onAuthChange); // listen passes true to the fn when signed in and false when signed out
    });
  }

  // onAuthChange is called any time the auth status changes
  onAuthChange = isSignedIn => {
    // call the action creators depending if the user is logged in or not
    if (isSignedIn) {
      // this.auth.currentUser.get().getAuthResponse().id_token => gets the jwt token
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon"></i>Sign out
        </button>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={this.onSignInClick}>
          <i className="google icon"></i>Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
