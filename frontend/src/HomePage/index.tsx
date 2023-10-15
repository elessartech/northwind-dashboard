import { useEffect, useState } from "react";
import styled from "styled-components";
import { apiBaseUrl } from "../constants";
import axios from "axios";
import { LoggedInUser } from "../types";
import { useNavigate } from "react-router-dom";
import React from "react";
import Navigation from "../components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Wrapper = styled.section`
  margin: 2em auto 0 auto;
  width: 100%;
`;

const ContentWrapper = styled.figure`
  width: 70%;
  height: 80vh;
  border-radius: 12px;
  background: rgb(1, 43, 55);
  margin: auto;
  display: flex;
  padding: 1em;
  @media only screen and (max-width: 945px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const InfoWrapper = styled.figure`
  height: 100%;
  width: 100%;
  background-color: rgb(77, 106, 115, 0.5);
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 7%;
  padding-bottom: 2em;
  @media only screen and (min-width: 945px) {
    max-height: 600px;
  }
`;

const InfoHeader = styled.h1`
  margin-bottom: 1em;
  font-size: 2em;
`;

const InfoIconWrapper = styled.div`
  text-align: center;
  margin-bottom: 2em;
  & > svg {
    font-size: 8em;
  }
  @media only screen and (max-width: 945px) {
    & > svg {
      font-size: 5em;
    }
  }
`;

const InfoIcon = styled(FontAwesomeIcon)``;

const InfoDescr = styled.p`
  font-size: 1.125em;
  line-height: 1.75em;
`;

const LoginFormWrapper = styled.figure`
  height: 100%;
  width: 100%;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  @media only screen and (max-width: 945px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const LoginFormHeader = styled.h1`
  margin-bottom: 0.25em;
  font-size: 2em;
`;

const LoginFormSubHeader = styled.p`
  font-size: 1.125em;
  line-height: 1.75em;
`;

const LoginFormInputContainer = styled.figure`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

const LoginFormInputLabel = styled.label`
  margin-bottom: 0.5em;
  font-size: 0.8em;
  font-weight: 500;
`;

const LoginFormInputBar = styled.input`
  background-color: rgb(255, 255, 255, 0.08);
  padding: 0.75em;
  border-radius: 15px;
  border: none;
  color: #ffffff;
  min-width: 500px;
  font-size: 1.25em;
  &::placeholder {
    color: rgb(255, 255, 255, 0.5);
    font-size: 1.25em;
    letter-spacing: 0.05rem;
  }
  @media only screen and (max-width: 600px) {
    & {
      min-width: 200px;
    }
  }
`;

const LoginFormInputBarContainer = styled.div`
  position: relative;
`;

const LoginFormSubmitBtnContainer = styled.div`
  margin: 2em auto 0 auto;
  text-align: left;
`;

const LoginFormSubmitBtn = styled.button`
  background-color: rgb(0, 17, 22);
  padding: 0.75em;
  border-radius: 15px;
  border: none;
  color: #ffffff;
  min-width: 100px;
  font-size: 1.25em;
  cursor: pointer;
`;

const HomePage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [logInSubmitted, setLogInSubmitted] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    const sendLoginReq = async () => {
      try {
        const { data: loggedInUser } = await axios.post<LoggedInUser>(
          `${apiBaseUrl}/login`,
          { email, password }
        );
        window.localStorage.setItem(
          "loggedInNorthwindUser",
          JSON.stringify(loggedInUser)
        );
        navigate("/orders");
      } catch (e) {
        console.error(e);
        void NotificationManager.error("Wrong credentials!", "", 3000);
        setLogInSubmitted(false);
      }
    };
    if (!logInSubmitted) {
      const loggedUserJSON = window.localStorage.getItem(
        "loggedInNorthwindUser"
      );
      if (loggedUserJSON) {
        navigate("/orders");
      }
    }
    if (logInSubmitted && email !== "" && password !== "") {
      void sendLoginReq();
      setLogInSubmitted(false);
    } else if (logInSubmitted && (email === "" || password === "")) {
      void NotificationManager.error("Please, enter all fields!", "", 3000);
      setLogInSubmitted(false);
    }
  }, [logInSubmitted]);

  return (
    <React.Fragment>
      <Navigation />
      <Wrapper>
        <ContentWrapper>
          <InfoWrapper>
            <InfoIconWrapper>
              <InfoIcon height={250} width={250} icon={faWind} />
            </InfoIconWrapper>
            <InfoHeader>Northwind: Orders & Statistics</InfoHeader>
            <InfoDescr>
              Tracking, analyzing, growing has been made easy!
            </InfoDescr>
          </InfoWrapper>
          <LoginFormWrapper>
            <LoginFormHeader>Get started</LoginFormHeader>
            <LoginFormSubHeader>
              Authorize your administrator account now
            </LoginFormSubHeader>
            <NotificationContainer />
            <LoginFormInputContainer>
              <LoginFormInputLabel htmlFor="EmailInput">
                Email
              </LoginFormInputLabel>
              <LoginFormInputBarContainer>
                <LoginFormInputBar
                  type="email"
                  name="productName"
                  id="EmailInput"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </LoginFormInputBarContainer>
            </LoginFormInputContainer>
            <LoginFormInputContainer>
              <LoginFormInputLabel htmlFor="PasswordInput">
                Password
              </LoginFormInputLabel>
              <LoginFormInputBarContainer>
                <LoginFormInputBar
                  type="password"
                  name="productName"
                  id="PasswordInput"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </LoginFormInputBarContainer>
            </LoginFormInputContainer>
            <LoginFormSubmitBtnContainer>
              <LoginFormSubmitBtn onClick={() => setLogInSubmitted(true)}>
                Log In
              </LoginFormSubmitBtn>
            </LoginFormSubmitBtnContainer>
          </LoginFormWrapper>
        </ContentWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default HomePage;
