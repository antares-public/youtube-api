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
      <Form onSubmit={logIn}>
        <Input
          placeholder="Basic usage"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <Input.Password
          className="my-1"
          placeholder="input password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="primary" htmlType="submit">
          Log In
        </Button>
      </Form>
    </Center>
  );
};

const Center = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const Form = styled.form`
  text-align: center;
  max-width: 200px;
`;
