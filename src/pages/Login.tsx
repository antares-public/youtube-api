import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Input, Button } from "antd";
import styled from "styled-components";

import { createNewToken } from "../Actions/CreateNewToken";
import { ITokenState } from "../interfaces";
import users from "../users.json";

type LoginProps = {
  currentToken?: string | null;
  createNewToken: (token: string) => void;
};

const Login: React.FC<LoginProps> = ({ currentToken, createNewToken }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  if (currentToken) {
    return <Redirect to="/search" />;
  }

  const logIn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const check = users.filter(
      (user) => user.login === login && user.password === password
    );
    if (check.length >= 1) createNewToken(Date.now().toString());
  };

  return (
    <Center>
      <Container>
        <img
          className="mb-20"
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          width="50"
          alt="logo"
        />
        <h1>Вход</h1>
        <form>
          <div style={{ textAlign: "left" }}>
            <label>Логин</label>
            <Input
              style={{ marginBottom: "10px" }}
              size="large"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Логин"
            />

            <label>Пароль</label>
            <Input.Password
              style={{ marginBottom: "20px" }}
              size="large"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
            />
          </div>
          <Button onClick={(e) => logIn(e)} type="primary" size="large">
            Войти
          </Button>
        </form>
      </Container>
    </Center>
  );
};
const mapStateToProps = (state: { auth: ITokenState }) => ({
  currentToken: state.auth.token,
});

export default connect(mapStateToProps, { createNewToken })(Login);

const Center = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  text-align: center;
  background-color: #e1e1e1;
`;

const Container = styled.div`
  max-width: 500px;

  padding: 120px 100px;
  background-color: #fff;
  border-radius: 10px;
`;
