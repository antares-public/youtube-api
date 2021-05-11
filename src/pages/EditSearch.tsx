import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Button, Slider, Select, Col, Row, InputNumber } from "antd";

const EditSearch: React.FC<{ important: any }> = ({ important }) => {
  let { id } = useParams<any>();
  const { Option } = Select;
  const [inputValue, setInputValue] = useState(1);

  let currentSerch: any = {};
  important.filter((e: any) => (e.id == id ? (currentSerch = e) : null));

  return (
    <Center>
      <Container>
        <h2>Сохранить запрос</h2>

        <form>
          <div style={{ textAlign: "left" }}>
            <label>Запрос</label>
            <Input
              style={{ marginBottom: "10px" }}
              size="large"
              placeholder={currentSerch.keywords}
            />

            <label>Название</label>
            <Input
              style={{ marginBottom: "20px" }}
              size="large"
              placeholder="Укажите название"
            />

            <label>Сортировать по</label>
            <Select style={{ marginBottom: "20px", width: "100%" }} allowClear>
              <Option value="lucy">Lucy</Option>
            </Select>

            <label>Максимальное количество</label>
            <Row style={{ marginBottom: "20px" }}>
              <Col span={12}>
                <Slider
                  min={1}
                  max={20}
                  onChange={(value: any) => setInputValue(value)}
                  value={inputValue}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={20}
                  style={{ margin: "0 16px" }}
                  value={inputValue}
                  onChange={(e: any) => setInputValue(e.target.value)}
                />
              </Col>
            </Row>
          </div>
          <Button type="primary" size="large">
            Сохранить
          </Button>
        </form>
      </Container>
    </Center>
  );
};

const mapStateToProps = (state: any) => ({
  important: state.important,
});

export default connect(mapStateToProps, null)(EditSearch);

const Center = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  text-align: center;
  background-color: #50b0ff;
`;

const Container = styled.div`
  padding: 60px 100px;

  width: 500px;
  height: 500px;
  background-color: #fff;

  border-radius: 10px;
`;
