import React, { useState, Fragment } from "react";
import { Input, Tooltip } from "antd";
import { VideoList } from "../components/VideoList";
import { VideoTable } from "../components/VideoTable";
import styled from "styled-components";
import { Redirect, NavLink } from "react-router-dom";
import { MenuOutlined, TableOutlined, HeartTwoTone } from "@ant-design/icons";
import { ITokenState } from "../interfaces";

import { connect } from "react-redux";

const Home: React.FC<{ currentToken?: string }> = ({ currentToken }) => {
  const [video, setVideo] = useState<any>();
  const [keywords, setKeywords] = useState<string>("");

  const [table, setTable] = useState<boolean>(false);

  if (!currentToken) {
    return <Redirect to="/login" />;
  }

  async function searchYoutube(query: string) {
    setKeywords(query);

    const maxResults = 12;
    const key = "AIzaSyD9PgoqQw-WmEWkUNIgh03FJZi8qpag_gk";
    let url = `https://youtube.googleapis.com/youtube/v3/search?order=viewCount&type=video&part=snippet&maxResults=${maxResults}&q=${query}&key=${key}`;
    if (!query) {
      setVideo("");
    } else {
      const video = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setVideo(await video.json());
    }
  }

  const saveToFavorite = () => {
    // в state => храниоище закинуть запрос keywords
  };

  return (
    <Fragment>
      <Container>
        <h1 className="mb-20">Поиск видео</h1>
        <Search
          placeholder="Что нужно посмотреть?"
          enterButton="Найти"
          size="large"
          suffix={
            <Tooltip
              placement="bottom"
              title={() => (
                <p>
                  Поиск будет сохранен в разделе «Избранное»
                  <br /> <NavLink to="/favorites">Перейти в избранное</NavLink>
                </p>
              )}
            >
              <Heart onClick={() => saveToFavorite()} />
            </Tooltip>
          }
          onSearch={(value: string) => searchYoutube(value)}
        />
        {video && (
          <>
            <Header>
              {keywords && <h1>Видео по запросу «{keywords}»</h1>}
              <div>
                <Line onClick={() => setTable(false)} />
                <Table onClick={() => setTable(true)} />
              </div>
            </Header>
            {!table ? (
              <VideoList video={video} />
            ) : (
              <VideoTable video={video} />
            )}
          </>
        )}
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state: { auth: ITokenState }) => ({
  currentToken: state.auth.token,
});

export default connect(mapStateToProps, null)(Home);

const Heart = styled(HeartTwoTone)`
  color: red;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled(MenuOutlined)``;

const Table = styled(TableOutlined)`
  margin-left: 20px;
`;

const Container = styled.div`
  overflow-y: auto;

  text-align: center;
`;
const Search = styled(Input.Search)`
  margin-bottom: 20px;
`;
