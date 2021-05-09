import React, { useState } from "react";
import { Input, Button } from "antd";
import styled from "styled-components";
import { Home } from "./Home";

import { connect } from "react-redux";
import { createNewToken } from "../Actions/createNewToken";

import users from "../users.json";

const App: React.FC<{ createNewToken: any; token: any }> = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const check = users.filter(
      (user) => user.login === login && user.password === password
    );

    if (check.length >= 1) {
      let token = Date.now().toString();
      props.createNewToken(token);
      localStorage.setItem("user", token);
    }
  };

  if (localStorage.getItem("user")) {
    return <Home />;
  }
  // if (props.token) {
  // return <Home />;
  // }

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
          <LogIn>
            <label>Логин</label>
            <Input
              placeholder="Basic usage"
              value={login}
              size="large"
              onChange={(e) => setLogin(e.target.value)}
            />
          </LogIn>

          <LogIn>
            <label>Пароль</label>
            <Input.Password
              size="large"
              placeholder="input password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </LogIn>
          <Button onClick={(e) => logIn(e)} type="primary" size="large">
            Войти
          </Button>
        </form>
      </Container>
    </Center>
  );
};

const mapStateToProps = (state: any) => ({
  token: state.token,
});

export default connect(mapStateToProps, { createNewToken })(App);

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

const LogIn = styled.p`
  text-align: left;
`;
