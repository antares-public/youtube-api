import React from "react";
import styled from "styled-components";

export const VideoTable: React.FC<{
  video: { items: [] };
}> = ({ video }) => (
  <YoutubeList>
    {video?.items?.map((e: any) => {
      return (
        <Item key={e.id.videoId}>
          <img src={e.snippet.thumbnails.medium.url} alt="" />

          <ItemContent>
            <a href={`https://youtu.be/${e.id.videoId}`}>{e.snippet.title}</a>
            <a href={`https://www.youtube.com/channel/${e.snippet.channelId}`}>
              {e.snippet.channelTitle}
            </a>
            <p>{e.snippet.description}</p>
          </ItemContent>
        </Item>
      );
    })}
  </YoutubeList>
);

const YoutubeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Item = styled.div`
  max-width: 300px;
  margin: 5px;

  > img {
    min-width: 200px;
  }
`;

const ItemContent = styled.div`
  text-align: left;

  > a {
    color: #333;
    font-weight: 600;
  }
`;
