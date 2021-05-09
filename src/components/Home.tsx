import React, { useState } from "react";
import { Input } from "antd";
import { VideoList } from "./VideoList";
import styled from "styled-components";
import videoJSON from "../video.json";

export const Home: React.FC = () => {
  const { Search } = Input;

  const [video, setVideo] = useState<any>();

  async function searchYoutube(keywords: string) {
    const maxResults = 12;
    const key = "AIzaSyD9PgoqQw-WmEWkUNIgh03FJZi8qpag_gk";
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${keywords}&key=${key}`;
    const video = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // setVideo(await video.json());

    setVideo(videoJSON);
  }

  return (
    <Container>
      <Search
        placeholder="input search text"
        enterButton
        allowClear
        size="large"
        onSearch={(value: string) => searchYoutube(value)}
      />
      <VideoList video={video} />
    </Container>
  );
};

const Container = styled.div`
  padding: 40px 200px;
  overflow-y: auto;
`;
