import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import styled from "styled-components";
import { Home } from "./Home";

import users from "../users.json";

export const App: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [tokenUser, setTokenUser] = useState<string | null>("");

  useEffect(() => {
    setTokenUser(localStorage.getItem("user"));
  }, []);

  const logIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const check = users.filter(
      (user) => user.login === login && user.password === password
    );

    if (check.length >= 1) {
      let token = Date.now().toString();
      localStorage.setItem("user", token);
    }

    setTokenUser(localStorage.getItem("user"));
  };

  if (tokenUser) {
    return <Home />;
  }

  return (
    <Center>
      <Container>
        <img
          className="mb-20"
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          width="50"
        />
        <h1>Вход</h1>
        <form onSubmit={logIn}>
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
          <Button type="primary" size="large" htmlType="submit">
            Войти
          </Button>
        </form>
      </Container>
    </Center>
  );
};

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
