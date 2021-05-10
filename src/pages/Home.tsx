import React, { useState, Fragment } from "react";
import { Input } from "antd";
import { VideoList } from "../components/VideoList";
import { VideoTable } from "../components/VideoTable";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { MenuOutlined, TableOutlined, HeartTwoTone } from "@ant-design/icons";
import { IState } from "../interfaces";

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

  return (
    <Fragment>
      <Container>
        <h1 className="mb-20">Поиск видео</h1>
        <Search
          placeholder="Что нужно посмотреть?"
          enterButton="Найти"
          allowClear
          size="large"
          suffix={<Heart />}
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

const mapStateToProps = (state: IState) => ({
  currentToken: state.token,
});

export default connect(mapStateToProps, null)(Home);

const Heart = styled(HeartTwoTone)``;

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
  padding: 40px 100px;
  overflow-y: auto;

  text-align: center;
`;
const Search = styled(Input.Search)`
  margin-bottom: 20px;
`;
