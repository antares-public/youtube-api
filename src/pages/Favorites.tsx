import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ITokenState } from "../interfaces";

const Favorites: React.FC<{ currentToken?: string; important: [] }> = ({
  currentToken,
  important,
}) => {
  if (!currentToken) {
    return <Redirect to="/login" />;
  }

  console.log(important);
  return <h1>Избранное</h1>;
};

const mapStateToProps = (state: { auth: ITokenState; important: [] }) => ({
  currentToken: state.auth.token,
  important: state.important,
});

export default connect(mapStateToProps, null)(Favorites);
