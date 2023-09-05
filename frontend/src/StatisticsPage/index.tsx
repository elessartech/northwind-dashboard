import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.section`
  margin: 5em auto 0 auto;
  width: 100%;
  text-align: center;
`;

const StatisticsStatusIcon = styled(FontAwesomeIcon)`
  height: 50px;
  width: 50px;
  color: rgb(181, 65, 57);
  margin-bottom: 2em;
`;

const StatisticsStatus = styled.h1`
  margin-bottom: 0.75em;
`;

const StatisticsGridWrapper = styled.div`
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  @media only screen and (max-width: 800px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }
`;

const StatisticsGridItem = styled.div`
  background: black;
  width: 90%; 
  height: 400px; 
  margin: 2em auto;
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  position:relative;
  &:before, &:after {
    content:"";
    position:absolute;
    z-index:-1;
    -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
    -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
    box-shadow:0 0 20px rgba(0,0,0,0.8);
    top:0;
    bottom:0;
    left:10px;
    right:10px;
    -moz-border-radius:100px / 10px;
    border-radius:100px / 10px;
  }
  &:after {
    right:10px;
    left:auto;
    -webkit-transform:skew(8deg) rotate(3deg);
    -moz-transform:skew(8deg) rotate(3deg);
    -ms-transform:skew(8deg) rotate(3deg);
    -o-transform:skew(8deg) rotate(3deg);
    transform:skew(8deg) rotate(3deg);
  }
`;

const StatisticsPage = () => {
  return (
    <React.Fragment>
      <Navigation authUserNavToBeDisplayed />
      <Wrapper>
        <StatisticsStatusIcon icon={faChartSimple}></StatisticsStatusIcon>
        <StatisticsStatus>Statistics</StatisticsStatus>
        <StatisticsGridWrapper>
          <StatisticsGridItem />
          <StatisticsGridItem />
          <StatisticsGridItem />
          <StatisticsGridItem />
          <StatisticsGridItem />
          <StatisticsGridItem />
        </StatisticsGridWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default StatisticsPage;
