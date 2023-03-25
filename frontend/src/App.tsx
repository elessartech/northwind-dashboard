import OrdersPage from "./OrdersPage";
import styled from "styled-components";
import Logo from "./components/Logo";

const AppWrap = styled.div``;

function App() {
  return (
    <AppWrap>
      <Logo />
      <OrdersPage />
    </AppWrap>
  );
}

export default App;
