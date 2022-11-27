import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import { mobile4, mobile5 } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile4({
    marginRight: "100px",
    display: "flex",
    justifyContent: "center",
  })};
  ${mobile5({
    marginRight: "10px",
    display: "flex",
    justifyContent: "center",
    width: "50%",
  })};
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
