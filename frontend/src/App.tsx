import OrdersPage from "./OrdersPage";
import styled from "styled-components";
import Logo from "./components/Logo";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

const AppWrap = styled.div``;

function App() {
  return (
    <AppWrap>
      <Logo />
      <Routes>
        <Route path="/" element={<HomePage />} index />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </AppWrap>
  );
}

export default App;
