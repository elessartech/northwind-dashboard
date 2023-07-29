import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";

const Wrapper = styled.section`
  margin: 5em auto 0 auto;
  width: 100%;
  text-align: center;
`;

const StatisticsPage = () => {
    return (
        <React.Fragment>
            <Navigation authUserNavToBeDisplayed />
            <Wrapper>
                
            </Wrapper>
        </React.Fragment>
    );
};

export default StatisticsPage;