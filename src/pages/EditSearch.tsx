import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { editFavorite } from "../Actions/editImportant";
import { Input, Button, Slider, Select, Col, Row, InputNumber } from "antd";

const EditSearch: React.FC<{ important: any; editFavorite: any }> = ({
  important,
  editFavorite,
}) => {
  let { id } = useParams<any>();
  const { Option } = Select;
  const [inputValue, setInputValue] = useState(12);

  const query = useRef<any>();
  const name = useRef<any>();

  let [currentSerch, setCurrentSearch]: any = useState({});
  const history = useHistory();

  useEffect(() => {
    important.filter((e: any) => e.id === id && setCurrentSearch(e));
  }, [important, id]);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(important));
  }, [important]);

  const editHandler = async () => {
    await editFavorite({
      id: id,
      keywords: query.current.input.value,
      name: name.current.input.value,
      count: inputValue,
    });

    history.push("/favorites");
  };

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
              ref={query}
              placeholder={currentSerch.keywords}
            />

            <label>Название</label>
            <Input
              ref={name}
              style={{ marginBottom: "20px" }}
              size="large"
              placeholder="Укажите название"
            />

            <label>Сортировать по</label>
            <Select
              defaultValue="default"
              disabled
              style={{ marginBottom: "20px", width: "100%" }}
              allowClear
            >
              <Option value="default">Без сортировки</Option>
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
                  onChange={(value: any) => setInputValue(value)}
                />
              </Col>
            </Row>
          </div>
          <div>
            <SaveBtn type="primary" size="large" onClick={() => editHandler()}>
              Сохранить
            </SaveBtn>
            <SaveBtn
              type="default"
              size="large"
              onClick={() => history.push("/favorites")}
            >
              Не сохранять
            </SaveBtn>
          </div>
        </form>
      </Container>
    </Center>
  );
};

const mapStateToProps = (state: any) => ({
  important: state.important,
});

export default connect(mapStateToProps, { editFavorite })(EditSearch);

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

const SaveBtn = styled(Button)`
  margin-right: 10px;
`;
