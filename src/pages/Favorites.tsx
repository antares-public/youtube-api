import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ITokenState } from "../interfaces";
import Navbar from "./../components/Navbar";
import styled from "styled-components";
import { deleteImportant } from "../Actions/DeleteImportant";

const Favorites = ({ currentToken, important, deleteImportant }: any) => {
  if (!currentToken) {
    return <Redirect to="/login" />;
  }

  const removeHandler = (id: number) => {
    // console.log(important.filter((e: { id: number }) => e.id !== id));
    // полученный массив отправить в localstorage и в dispatch отравить в state
    deleteImportant(important.filter((e: { id: number }) => e.id !== id));
  };

  const changeHandler = () => {
    console.log("change");
  };

  return (
    <>
      <Navbar />
      <Container>
        <h1>Избранное</h1>
        <FavoritesList>
          {important?.map((e: { id: number; keywords: string }, i: number) => (
            <div className="active" key={i}>
              {e.keywords}
              <div className="hover">
                <a onClick={changeHandler}>Изменить</a>
                <a
                  onClick={() => removeHandler(e.id)}
                  style={{ marginLeft: "10px", color: "red" }}
                >
                  Удалить
                </a>
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
