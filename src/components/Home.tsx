import React, { useState, Fragment } from "react";
import { Input } from "antd";
import { VideoList } from "./VideoList";
import { VideoTable } from "./VideoTable";
import styled from "styled-components";
import videoJSON from "../video.json";
import { MenuOutlined, TableOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";

export const Home: React.FC = () => {
  const [video, setVideo] = useState<any>();
  const [keywords, setKeywords] = useState<string>("");

  const [table, setTable] = useState<boolean>(false);

  async function searchYoutube(query: string) {
    setKeywords(query);

    const maxResults = 12;
    const key = "AIzaSyD9PgoqQw-WmEWkUNIgh03FJZi8qpag_gk";
    let url = `https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=${maxResults}&q=${keywords}&key=${key}`;
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
        {video && (
          <>
            <Header>
              {keywords && <h1>Видео по запросу «{keywords}»</h1>}
              <div>
                <Line onClick={() => setTable(false)} />
                <Table onClick={() => setTable(true)} />
              </div>
            </Header>
            {/* <VideoList video={video} /> */}
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
