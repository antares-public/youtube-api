import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ITokenState } from "../interfaces";

const Favorites: React.FC<{ currentToken?: string }> = ({ currentToken }) => {
  if (!currentToken) {
    return <Redirect to="/login" />;
  }
  return <h1>Избранное</h1>;
};

const mapStateToProps = (state: { auth: ITokenState }) => ({
  currentToken: state.auth.token,
});

export default connect(mapStateToProps, null)(Favorites);
