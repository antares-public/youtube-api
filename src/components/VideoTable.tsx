import React from "react";
import styled from "styled-components";

export const VideoTable: React.FC<{
  video: any;
}> = ({ video }) => {
  return (
    <YoutubeList>
      {video?.items?.map((e: any) => {
        return (
          <Item key={e.id.videoId}>
            <img src={e.snippet.thumbnails.medium.url} alt="" width="400" />

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const Item = styled.div`
  /* margin: 0 20px 20px 0; */
  max-width: 400px;
`;

const ItemContent = styled.div`
  text-align: left;

  > a {
    color: #333;
    font-weight: 600;
  }
`;
