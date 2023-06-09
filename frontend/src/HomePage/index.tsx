import styled from "styled-components";

const Wrapper = styled.section`
  margin: 2em auto 0 auto;
  width: 100%;
`;

const ContentWrapper = styled.figure`
  width: 70%;
  height: 80vh;
  border-radius: 12px;
  background: rgb(1,43,55);
  margin: auto;
  display: flex;
  padding: 1em;
`;

const InfoWrapper = styled.figure`
  height: 100%;
  width: 100%;
  background-color: rgb(77,106,115, .5);
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 10em;
`;

const InfoHeader = styled.h1`
  margin-bottom: 1em;
  font-size: 2em;
`;

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
`;

const LoginFormHeader = styled.h1`
  margin-bottom: .25em;
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
  text-align: center;
`;

const LoginFormSubmitBtn = styled.button`
  background-color: rgb(0,17,22);
  padding: 0.75em;
  border-radius: 15px;
  border: none;
  color: #ffffff;
  min-width: 100px;
  font-size: 1.25em;
  cursor: pointer;
`;

const HomePage = () => {
    return (
        <Wrapper>
          <ContentWrapper>
            <InfoWrapper>
              <InfoHeader>Let us help you run your freelance business.</InfoHeader>
              <InfoDescr>Our registration process is easy, takes no more than 10 minutes to complete.</InfoDescr>
            </InfoWrapper>
            <LoginFormWrapper>
              <LoginFormHeader>Get started</LoginFormHeader>
              <LoginFormSubHeader>Create your own account now</LoginFormSubHeader>
              <LoginFormInputContainer>
                <LoginFormInputLabel htmlFor="EmailInput">Email</LoginFormInputLabel>
                <LoginFormInputBarContainer>
                  <LoginFormInputBar type="email" name="productName" id="EmailInput" placeholder="example@example.com" />
                </LoginFormInputBarContainer>
              </LoginFormInputContainer>
              <LoginFormInputContainer>
                <LoginFormInputLabel htmlFor="PasswordInput">Password</LoginFormInputLabel>
                <LoginFormInputBarContainer>
                  <LoginFormInputBar type="password" name="productName" id="PasswordInput" />
                </LoginFormInputBarContainer>
              </LoginFormInputContainer>
              <LoginFormSubmitBtnContainer>
                <LoginFormSubmitBtn>Log In</LoginFormSubmitBtn>
              </LoginFormSubmitBtnContainer>
            </LoginFormWrapper>
          </ContentWrapper>
        </Wrapper>
    );
};

export default HomePage;