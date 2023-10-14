import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { apiBaseUrl } from "../constants";
import axios from "axios";
import Pie from "../components/charts/Pie";
import Calendar from "../components/charts/Calendar";

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
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 800px) {
    & {
      display: flex;
      flex-direction: column;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const StatisticsGridItem = styled.div`
  padding: .25em 0;
  background: rgb(181, 65, 57);
  width: 100%;
  max-width: 750px;
  height: 400px;
  margin: 2em auto;
  -webkit-box-shadow: 0 1px 4px rgba(181, 65, 57, 0.3),
    0 0 40px rgba(181, 65, 57, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(181, 65, 57, 0.3),
    0 0 40px rgba(181, 65, 57, 0.1) inset;
  box-shadow: 0 1px 4px rgba(181, 65, 57, 0.3),
    0 0 40px rgba(181, 65, 57, 0.1) inset;
  position: relative;
  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    -webkit-box-shadow: 0 0 20px rgba(181, 65, 57, 0.8);
    -moz-box-shadow: 0 0 20px rgba(181, 65, 57, 0.8);
    box-shadow: 0 0 20px rgba(181, 65, 57, 0.8);
    top: 0;
    bottom: 0;
    left: 10px;
    right: 10px;
    -moz-border-radius: 100px / 10px;
    border-radius: 100px / 10px;
  }
  &:after {
    right: 10px;
    left: auto;
    -webkit-transform: skew(8deg) rotate(3deg);
    -moz-transform: skew(8deg) rotate(3deg);
    -ms-transform: skew(8deg) rotate(3deg);
    -o-transform: skew(8deg) rotate(3deg);
    transform: skew(8deg) rotate(3deg);
  }
`;

const StatisticsPage = () => {
  const [
    numberOfOrdersThroughoutTimelineData,
    setNumberOfOrdersThroughoutTimelineData,
  ] = useState<any>(null);
  const [numberOfOrdersByCountry, setNumberOfOrdersByCountry] =
    useState<any>(null);
  const [mostSaledProduct, setMostSaledProduct] = useState<any>(null);
  const [mostSaledProductPerItem, setMostSaledProductPerItem] =
    useState<any>(null);
  const [mostSaledCategory, setMostSaledCategory] = useState<any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedInNorthwindUser");
    if (!loggedUserJSON) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (!numberOfOrdersThroughoutTimelineData) {
      void fetchChartData('number-of-orders-throughout-timeline').then(data => setNumberOfOrdersThroughoutTimelineData(data))
    }
    if (!numberOfOrdersByCountry) {
      void fetchChartData('number-of-orders-by-country').then(data => setNumberOfOrdersByCountry(data))
    }
    if (!mostSaledProduct) {
      void fetchChartData('most-saled-product').then(data => setMostSaledProduct(data))
    }
    if (!mostSaledProductPerItem) {
      void fetchChartData('most-saled-product-per-item').then(data => setMostSaledProductPerItem(data))
    }
    if (!mostSaledCategory) {
      void fetchChartData('most-saled-category').then(data => setMostSaledCategory(data))
    }
  }, [numberOfOrdersThroughoutTimelineData, numberOfOrdersByCountry,mostSaledProduct, mostSaledProductPerItem, mostSaledCategory]);

  const fetchChartData = useCallback(async (url: string) => {
    try {
      const { data: statisticsData } = await axios.get<any>(
        `${apiBaseUrl}/statistics/${url}`
      );
      return statisticsData
    } catch (e) {
      console.error(e);
    }
  }, [])

  return (
    <React.Fragment>
      <Navigation authUserNavToBeDisplayed />
      <Wrapper>
        <StatisticsStatusIcon icon={faChartSimple}></StatisticsStatusIcon>
        <StatisticsStatus>Statistics</StatisticsStatus>
        <StatisticsGridWrapper>
          <StatisticsGridItem>
            {numberOfOrdersThroughoutTimelineData && (
              <Calendar data={numberOfOrdersThroughoutTimelineData} header="Number of orders throughout the timeline" />
            )}
          </StatisticsGridItem>
          <StatisticsGridItem>
            {numberOfOrdersByCountry && (
              <Pie data={numberOfOrdersByCountry} header="Number of orders by country" />
            )}
          </StatisticsGridItem>
          <StatisticsGridItem>
            {mostSaledProduct && (
              <Pie data={mostSaledProduct} header="Most saled products" />
            )}
          </StatisticsGridItem>
          <StatisticsGridItem>
            {mostSaledProductPerItem && (
              <Pie data={mostSaledProductPerItem} header="Most saled products per item"/>
            )}
          </StatisticsGridItem>
          <StatisticsGridItem>
            {mostSaledCategory && (
              <Pie data={mostSaledCategory} header="Most saled categories" />
            )}
          </StatisticsGridItem>
        </StatisticsGridWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default StatisticsPage;
