import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import { mobile5 } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding: ${(props) => (props.type === "sm" ? "25px 0" : "25px 30px")};
  margin-right: ${(props) => (props.type === "sm" ? "0px" : "30px")};
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(
        `https://aletube.herokuapp.com/api/videos/${type}`
      );
      setVideos(res.data);
      setLoading(false);
    };
    fetchVideos();
  }, [type]);

  if (loading) return <div>cargandooo...</div>;
  return (
    <Container>
      {videos?.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
