import { ClockLoader } from "react-spinners";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  width: 100%;
  & > span {
    margin: auto;
  }
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <ClockLoader color="hsla(0, 0%, 100%, 0.5)" size={200} />
    </SpinnerContainer>
  );
};

export default Spinner;
