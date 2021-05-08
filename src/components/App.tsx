import React from 'react';
import { Input, Button } from 'antd';
import styled from "styled-components"

export const App: React.FC = () => {
  return <Center><Form>
    <Input placeholder="Basic usage" />
    <Input.Password className="my-1" placeholder="input password" />
    <Button type="primary">Send</Button>
  </Form></Center>
}

const Center = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const Form = styled.div`
  text-align: center;
  max-width: 300px;
`;

