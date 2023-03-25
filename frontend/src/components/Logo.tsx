import styled from "styled-components";

const Header = styled.header`
  margin: 1em 1.5em;
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

const Logo = () => {
  return (
    <Header>
      <LogoEl>Northwind</LogoEl>
    </Header>
  );
};
export default Logo;
