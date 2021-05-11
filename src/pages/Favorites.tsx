import React from "react";
import { connect } from "react-redux";
import { Redirect, useHistory, NavLink } from "react-router-dom";
import { ITokenState } from "../interfaces";
import Navbar from "./../components/Navbar";
import styled from "styled-components";
import { deleteImportant } from "../Actions/DeleteImportant";
import { IFavoriteState } from "../interfaces";

const Favorites = ({ currentToken, important, deleteImportant }: any) => {
  let history = useHistory();
  if (!currentToken) {
    return <Redirect to="/login" />;
  }

  const removeHandler = (id: number) => {
    deleteImportant(important.filter((e: { id: number }) => e.id != id));
  };

  const changeHandler = (id: number) => {
    return history.push(`/favorites/${id}`);
  };

  return (
    <>
      <Navbar />
      <Container>
        <h1>Избранное</h1>
        <FavoritesList>
          {important?.map((e: IFavoriteState) => (
            <div className="active" key={e.id}>
              <Link to={`/search?${e.keywords}`}>{e.name}</Link>
              <div className="hover">
                <button onClick={() => changeHandler(Number(e.id))}>
                  Изменить
                </button>
                <button
                  onClick={() => removeHandler(Number(e.id))}
                  style={{ marginLeft: "10px", color: "red" }}
                >
                  Удалить
                </button>
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

export default connect(mapStateToProps, { deleteImportant })(Favorites);

const Container = styled.div`
  padding: 40px 200px;
`;

const Link = styled(NavLink)`
  color: black;
  &:hover {
    color: black;
  }
`;

const FavoritesList = styled.div`
  background-color: #fff;

  > div {
    padding: 10px;
    margin: 0;
    color: black;
    display: flex;
    justify-content: space-between;

    border-top: 1px solid #f8f8f8;
    transition: 0.5s;

    &:hover {
      color: black;
      background-color: #c5c5c5;
    }

    &:first-child {
      border: none;
    }
  }
`;
