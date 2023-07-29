import OrdersPage from "./OrdersPage";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import OrderDetailsPage from "./OrderDetailsPage";
import StatisticsPage from "./StatisticsPage";

const AppWrap = styled.div``;

function App() {
  return (
    <AppWrap>
      <Routes>
        <Route path="/" element={<HomePage />} index />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/order/:orderId" element={<OrderDetailsPage />} />
      </Routes>
    </AppWrap>
  );
}

export default App;
