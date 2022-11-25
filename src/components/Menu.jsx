import React from "react";
import styled from "styled-components";
import AleTube from "../image/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { mobile1 } from "../responsive";

const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={AleTube} />
            <Items>ArcTube</Items>
          </Logo>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            <Items>Home</Items>
          </Item>
        </Link>
        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <ExploreOutlinedIcon />
            <Items>Explore</Items>
          </Item>
        </Link>
        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <SubscriptionsOutlinedIcon />
            <Items>Subscriptions</Items>
          </Item>
        </Link>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          <Items>Library</Items>
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          <Items>History</Items>
        </Item>
        <Hr />
        {!currentUser && (
          <>
            <Login>
              Sign in to like videos, comment, and subscribe.
              <Link to="signin" style={{ textDecoration: "none" }}>
                <Button>
                  <AccountCircleOutlinedIcon />
                  SIGN IN
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        )}
        <Items>
          <Title>BEST OF ARCTUBE</Title>
        </Items>
        <Item>
          <LibraryMusicOutlinedIcon />
          <Items>Music</Items>
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          <Items>Sports</Items>
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          <Items>Gaming</Items>
        </Item>
        <Item>
          <MovieOutlinedIcon />
          <Items>Movies</Items>
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          <Items>News</Items>
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          <Items>Live</Items>
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          <Items>Settings</Items>
        </Item>
        <Item>
          <FlagOutlinedIcon />
          <Items>Report</Items>
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          <Items>Help</Items>
        </Item>

        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          <Items>{darkMode ? "Light" : "Dark"} Mode</Items>
        </Item>
        <Items>
          {currentUser && (
            <Button onClick={handleClick}>
              <LogoutIcon />
              Logout
            </Button>
          )}
        </Items>
      </Wrapper>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  min-height: 140vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
  ${mobile1({ width: "10px" })};
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 17px;
`;

const Img = styled.img`
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &&:hover {
    background-color: ${({ theme }) => theme.soft};
    ${mobile1({ width: "30px" })};
  }
`;

const Items = styled.div`
  ${mobile1({ display: "none" })};
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
  ${mobile1({ display: "none" })};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
