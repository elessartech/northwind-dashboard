import { ResponsiveCalendar } from "@nivo/calendar";

const Calendar = ({ data, header }: any) => (
  <div style={{ height: 400 }}>
    <h2 style={{color: "black"}}>{header}</h2>
    <ResponsiveCalendar
      data={data}
      from={data[0]["day"]}
      to={data[data.length - 1]["day"]}
      emptyColor="#eeeeee"
      colors={[
        "#61cdbb",
        "#97e3d5",
        "#e8c1a0",
        "#f47560",
      ]}
      margin={{
        top: 40,
        right: 40,
        bottom: 40,
        left: 40,
      }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      tooltip={e => {
        return (
            <div
                style={{
                    background: "white",
                    padding: "9px 12px",
                    border: "1px solid #ccc",
                    borderRadius: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "black",
                }}
            >
                {e.day}: {e.value} {parseInt(e.value) > 1 ? 'orders' : 'order'}  
            </div>
        );
    }} 
    />
  </div>
);

export default Calendar;
