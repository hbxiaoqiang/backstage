import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfo } from '../../redux/modules/app'

class PrivateRoute extends Component {
  render() {
    const { component: Component,userInfo,...rest} = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          return userInfo.UserName ? (
            <Component {...props} />
          ) : (
            <Redirect
              to='/'
            />
          );
        }}
      />
    );
  }
}

const mapStateToProps = (state) => ({
    userInfo: getUserInfo(state)
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
