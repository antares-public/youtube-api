import React, { useState, Fragment, useEffect } from "react";
import { Input, Tooltip } from "antd";
import { VideoList } from "../components/VideoList";
import { VideoTable } from "../components/VideoTable";
import styled from "styled-components";
import { Redirect, NavLink, useParams, useHistory } from "react-router-dom";
import { MenuOutlined, TableOutlined, HeartTwoTone } from "@ant-design/icons";
import { ITokenState } from "../interfaces";
import Navbar from "./../components/Navbar";
import { IFavoriteState } from "../interfaces";

import { connect } from "react-redux";
import { Container } from "../styles";

const Home: React.FC<{
  currentToken?: string | null;
  important: IFavoriteState[];
}> = ({ currentToken, important }) => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [video, setVideo] = useState<any>();

  const [table, setTable] = useState<boolean>(false);

  useEffect(() => {
    searchYoutube(id);
  }, []);

  if (!currentToken) {
    return <Redirect to="/login" />;
  }

  async function searchYoutube(query: string) {
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
  const saveImportantSearch = async () => {
    important.push({
      id: Date.now().toString(),
      keywords: id,
      count: 12,
      name: id,
    });
    await localStorage.setItem("favorite", JSON.stringify(important));
  };

  return (
    <Fragment>
      <Navbar />
      <Container>
        <h1 className="mb-20">Поиск видео</h1>
        <Search
          placeholder="Что нужно посмотреть?"
          enterButton="Найти"
          size="large"
          suffix={
            <Tooltip
              placement="bottom"
              title={() => (
                <p>
                  Поиск будет сохранен в разделе «Избранное»
                  <br /> <NavLink to="/favorites">Перейти в избранное</NavLink>
                </p>
              )}
            >
              <Heart onClick={() => saveImportantSearch()} />
            </Tooltip>
          }
          value={id}
          onChange={(e) => {
            if (history.location.pathname === "/search") {
              history.push(`/search/${e.target.value}`);
            } else {
              history.push(`${e.target.value}`);
            }
            searchYoutube(id);
          }}
        />
        {video && (
          <>
            <Header>
              {id && <Title>Видео по запросу «{id}»</Title>}
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

const mapStateToProps = (state: { auth: ITokenState; important: [] }) => ({
  currentToken: state.auth.token,
  important: state.important,
});

export default connect(mapStateToProps, null)(Home);

const Heart = styled(HeartTwoTone)``;

const Title = styled.h1`
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled(MenuOutlined)``;

const Table = styled(TableOutlined)`
  margin-left: 20px;
`;

const Search = styled(Input.Search)`
  margin-bottom: 20px;
`;
