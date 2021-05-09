import React from "react";
import styled from "styled-components";

export const VideoList: React.FC<{
  video: any;
  keywords: any;
}> = ({ video, keywords }) => {
  return (
    <YoutubeList>
      {keywords && <h1>Видео по запросу «{keywords}»</h1>}
      {video?.items?.map((e: any) => {
        return (
          <Item key={e.id.videoId}>
            <img src={e.snippet.thumbnails.medium.url} alt="" />

            <ItemContent>
              <a href={`https://youtu.be/${e.id.videoId}`}>{e.snippet.title}</a>
              <a
                href={`https://www.youtube.com/channel/${e.snippet.channelId}`}
              >
                {e.snippet.channelTitle}
              </a>
              <p>{e.snippet.description}</p>
            </ItemContent>
          </Item>
        );
      })}
    </YoutubeList>
  );
};

const YoutubeList = styled.div`
  text-align: left;
`;

const Item = styled.div`
  display: flex;
`;

const ItemContent = styled.div`
  margin-left: 20px;

  display: flex;
  flex-direction: column;

  > a {
    color: #333;
    font-weight: 600;
  }
`;
