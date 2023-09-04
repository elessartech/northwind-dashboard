import { useNavigate } from "react-router";
import styled from "styled-components";
import { NavigationProps } from "../types";

const Header = styled.header`
  margin: 1em 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    & {
      text-align: center;
    }
  }
`;

const Logo = styled.span`
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: 500;
`;

const LoggedInUserNavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15em;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

const LogOutBtn = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const Navigation = ({ authUserNavToBeDisplayed = false }: NavigationProps) => {
  const navigate = useNavigate();
  const displayNavForLoggedUser = () => {
    return (
      <LoggedInUserNavWrap>
        <NavLink href="/orders">Orders</NavLink>
        <NavLink href="/statistics">Statistics</NavLink>
        <LogOutBtn onClick={() => handleLogout()}>Log Out</LogOutBtn>
      </LoggedInUserNavWrap>
    );
  };
  const handleLogout = () => {
    window.localStorage.removeItem("loggedInNorthwindUser");
    navigate("/");
  };
  return (
    <Header>
      <Logo>Northwind</Logo>
      {authUserNavToBeDisplayed && displayNavForLoggedUser()}
    </Header>
  );
};
export default Navigation;
