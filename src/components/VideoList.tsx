import React from "react";
import styled from "styled-components";

export const VideoList: React.FC<{
  video: { items: [] };
}> = ({ video }) => (
  <div style={{ textAlign: "left" }}>
    {video?.items?.map((e: any) => {
      return (
        <Item key={e.id.videoId}>
          <img src={e.snippet.thumbnails.medium.url} alt="" width="300" />

          <ItemContent>
            <a
              href={`https://youtu.be/${e.id.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              {e.snippet.title}
            </a>
            <a
              href={`https://www.youtube.com/channel/${e.snippet.channelId}`}
              target="_blank"
              rel="noreferrer"
            >
              {e.snippet.channelTitle}
            </a>
            <p>{e.snippet.description}</p>
          </ItemContent>
        </Item>
      );
    })}
  </div>
);

const Item = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ItemContent = styled.div`
  margin-left: 20px;

  display: flex;
  flex-direction: column;

  > a {
    color: #333;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;
