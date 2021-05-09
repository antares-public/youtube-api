import React, { useState, Fragment } from "react";
import { Input } from "antd";
import { VideoList } from "./VideoList";
import styled from "styled-components";
import videoJSON from "../video.json";
import { MenuOutlined, TableOutlined } from "@ant-design/icons";

import Navbar from "./Navbar";

export const Home: React.FC = () => {
  const [video, setVideo] = useState<any>();
  const [keywords, setKeywords] = useState<string>("");

  async function searchYoutube(query: string) {
    setKeywords(query);

    // const maxResults = 12;
    // const key = "AIzaSyD9PgoqQw-WmEWkUNIgh03FJZi8qpag_gk";
    // const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${keywords}&key=${key}`;
    // const video = await fetch(url, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // setVideo(await video.json());

    setVideo(videoJSON);
  }
  return (
    <Fragment>
      <Navbar />
      <Container>
        <h1 className="mb-20">Поиск видео</h1>
        <Search
          placeholder="input search text"
          enterButton="Search"
          allowClear
          size="large"
          onSearch={(value: string) => searchYoutube(value)}
        />
        <Header>
          {keywords && <h1>Видео по запросу «{keywords}»</h1>}
          <div>
            <Line />
            <Table />
          </div>
        </Header>
        <VideoList video={video} />
      </Container>
    </Fragment>
  );
};

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
  padding: 40px 300px;
  overflow-y: auto;

  text-align: center;
`;
const Search = styled(Input.Search)`
  margin-bottom: 20px;
`;
