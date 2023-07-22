
import { useNavigate } from "react-router";
import styled from "styled-components";

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

const LogoEl = styled.span`
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: 500;
`;

const LoggedInUserNavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10em;
`;

const StatisticsEl = styled.span``;

const LogOutEl = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

type NavigationProps = {
  authUserNavToBeDisplayed?: boolean
};

const Navigation = ({authUserNavToBeDisplayed=false}: NavigationProps) => {
  const navigate = useNavigate();
  const displayNavForLoggedUser = () => {
    return (
      <LoggedInUserNavWrap>
        <StatisticsEl>Statistics</StatisticsEl>
        <LogOutEl onClick={() => handleLogout()}>Log Out</LogOutEl>
      </LoggedInUserNavWrap>
    );
  };
  const handleLogout = () => {
    window.localStorage.removeItem("loggedInNorthwindUser");
    navigate('/');
  };
  return (
    <Header>
      <LogoEl>Northwind</LogoEl>
      { authUserNavToBeDisplayed && displayNavForLoggedUser() }
    </Header>
  );
};
export default Navigation;
