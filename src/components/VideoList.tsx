import React, { Fragment } from "react";

export const VideoList: React.FC<{ video: any }> = (video) => {
  return (
    <Fragment>
      {video.video?.items?.map((e: any) => {
        return (
          <div key={e.id.videoId}>
            <div>{e.snippet.channelTitle}</div>
            <a href={`https://youtu.be/${e.id.videoId}`}>
              <video
                poster={e.snippet.thumbnails.medium.url}
                src={`https://youtu.be/${e.id.videoId}`}
              ></video>
            </a>
          </div>
        );
      })}
    </Fragment>
  );
};
