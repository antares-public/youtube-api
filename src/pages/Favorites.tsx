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
  return (
    <>
      <h1>Избранное</h1>
      {important?.map((e: { keywords: string }, i: number) => (
        <p key={i}>{e.keywords}</p>
      ))}
    </>
  );
};

const mapStateToProps = (state: { auth: ITokenState; important: [] }) => ({
  currentToken: state.auth.token,
  important: state.important,
});

export default connect(mapStateToProps, null)(Favorites);
