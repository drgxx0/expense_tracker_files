import React from "react";
import { connect } from "react-redux";

import Loading from "Components/UI/loading/loading";
import Home from "Components/Home/home";
import SignIn from "Components/signin/signin";
import Dashboard from "Components/dashboard/dashboard";

import * as uiActions from "../store/actions/actionUI";
import * as authActions from "../store/actions/actionAuth";

const App = ({
  users,
  route,
  auth,
  handleRoute,
  handleAuth,
  handleError,
  error,
  loading
}) => {

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : auth ? (
        <Dashboard handleAuth={handleAuth} users={users} />
      ) : route === "signin" ? (
        <SignIn
          handleError={handleError}
          users={users}
          handleRoute={handleRoute}
          handleAuth={handleAuth}
          error={error}
        />
      ) : (
        <Home handleRoute={handleRoute} />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    users: state.auth.users,
    route: state.ui.route,
    auth: state.auth.auth,
    error: state.ui.error,
    loading: state.ui.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRoute: route => dispatch(uiActions.handleRoute(route)),
    handleAuth: stat => dispatch(authActions.handleAuth(stat)),
    handleError: (stat, message) =>
      dispatch(uiActions.handleError(stat, message))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
