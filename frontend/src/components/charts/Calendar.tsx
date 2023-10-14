import { ResponsiveCalendar } from "@nivo/calendar";
import styled from "styled-components";
import { CalendarChartData } from "../../types";

const CalendarWrap = styled.div`
  height: 400px;
`;

const CalendarHeader = styled.h2`
  color: #fff;
`;

const CalendarTooltip = styled.div`
  background: white;
  padding: 9px 12px;
  border: 1px solid #012b37;
  display: flex;
  alignitems: center;
  justifycontent: center;
  flexdirection: column;
  color: #012b37;
`;

interface CalendarProps {
  data: CalendarChartData[];
  header: string;
}

const Calendar = ({ data, header }: CalendarProps) => (
  <CalendarWrap>
    <CalendarHeader>{header}</CalendarHeader>
    <ResponsiveCalendar
      data={data}
      from={data[0]["day"]}
      to={data[data.length - 1]["day"]}
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{
        top: 40,
        right: 40,
        bottom: 40,
        left: 40,
      }}
      yearSpacing={40}
      monthBorderColor="#012b37"
      dayBorderWidth={2}
      dayBorderColor="#012b37"
      tooltip={(e) => {
        return (
          <CalendarTooltip>
            {e.day}: {e.value} {parseInt(e.value) > 1 ? "orders" : "order"}
          </CalendarTooltip>
        );
      }}
    />
  </CalendarWrap>
);

export default Calendar;
