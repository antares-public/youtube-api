import React, { Fragment } from "react";
import video from "../video.json";

export const VideoList: React.FC<{ res: any }> = (res) => {
  console.log(res.res);
  return (
    <Fragment>
      {res?.res?.items?.map((e: any) => {
        return (
          <div key={e.id.videoId}>
            <div>{e.snippet.channelTitle}</div>
            <video
              poster={e.snippet.thumbnails.medium.url}
              src={`https://youtu.be/${e.id.videoId}`}
            ></video>
          </div>
        );
      })}
    </Fragment>
  );
};
