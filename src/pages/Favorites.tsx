import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ITokenState } from "../interfaces";
import Navbar from "./../components/Navbar";
import styled from "styled-components";

const Favorites: React.FC<{ currentToken?: string; important: [] }> = ({
  currentToken,
  important,
}) => {
  const [hover, setHover] = useState(false);

  if (!currentToken) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Navbar />
      <Container>
        <h1>Избранное</h1>
        <FavoritesList>
          {important?.map((e: { keywords: string }, i: number) => (
            <div className="active" key={i}>
              {e.keywords}
              <div className="hover">
                <a>Изменить</a>
                <a style={{ marginLeft: "10px", color: "red" }}>Удалить</a>
              </div>
            </div>
          ))}
        </FavoritesList>
      </Container>
    </>
  );
};

const mapStateToProps = (state: { auth: ITokenState; important: [] }) => ({
  currentToken: state.auth.token,
  important: state.important,
});

export default connect(mapStateToProps, null)(Favorites);

const Container = styled.div`
  padding: 40px 200px;
`;

const FavoritesList = styled.div`
  background-color: #fff;

  > div {
    padding: 10px;
    margin: 0;

    display: flex;
    justify-content: space-between;

    border-top: 1px solid #f8f8f8;
    transition: 0.5s;

    &:hover {
      background-color: #c5c5c5;
    }

    &:first-child {
      border: none;
    }
  }
`;
