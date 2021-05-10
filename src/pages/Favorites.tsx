import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { IState } from "../interfaces";

const Favorites: React.FC<{ currentToken?: string }> = ({ currentToken }) => {
  if (!currentToken) {
    return <Redirect to="/login" />;
  }
  return <h1>Favorites</h1>;
};

const mapStateToProps = (state: IState) => ({
  currentToken: state.token,
});

export default connect(mapStateToProps, null)(Favorites);
