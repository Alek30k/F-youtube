import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Upload from "./Upload";
import { logout } from "../redux/userSlice";
import { mobile0 } from "../responsive";
import { mobile1 } from "../responsive";
import { mobile2 } from "../responsive";

const Navbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
    setOpenModal(!openModal);
    navigate("/");
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input
              placeholder="Search"
              onChange={(e) => setQ(e.target.value)}
              style={{ fontSize: 18, fontWeight: "500" }}
              onKeyPress={(e) =>
                e.key === "Enter" && navigate(`/search?q=${q}`)
              }
            />
            <ButtonSearch>
              <SearchOutlinedIcon onClick={() => navigate(`/search?q=${q}`)} />
            </ButtonSearch>
          </Search>
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon
                onClick={() => setOpen(true)}
                style={{ fontSize: 30 }}
              />
              <Avatar
                src={
                  currentUser.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                }
                onClick={() => setOpenModal(!openModal)}
              />
              {currentUser.name}
              {openModal && (
                <Menu>
                  <MenuItem onClick={() => setDarkMode(!darkMode)}>
                    <SettingsBrightnessOutlinedIcon />
                    {darkMode ? "Light" : "Dark"} Mode
                  </MenuItem>

                  <MenuLogout onClick={handleClick}>
                    {" "}
                    <LogoutIcon />
                    Logout
                  </MenuLogout>
                </Menu>
              )}
            </User>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 66px;
  ${mobile0({ height: "60px" })};
  ${mobile1({ height: "50px" })};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 150px;
  height: 100px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;

const MenuLogout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const MenuItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Search = styled.div`
  width: 45%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  ${mobile1({ height: "30%" })};
  ${mobile2({ height: "20%" })};
`;

const ButtonSearch = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  ${mobile1({ background: "none" })};
`;

const Input = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;
