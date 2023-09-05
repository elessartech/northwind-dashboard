import { ResponsiveLine } from "@nivo/line";

const LineAreaChart = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(358, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 162,
        },
        {
          x: "helicopter",
          y: 85,
        },
        {
          x: "boat",
          y: 205,
        },
        {
          x: "train",
          y: 242,
        },
        {
          x: "subway",
          y: 21,
        },
        {
          x: "bus",
          y: 161,
        },
        {
          x: "car",
          y: 57,
        },
        {
          x: "moto",
          y: 109,
        },
        {
          x: "bicycle",
          y: 284,
        },
        {
          x: "horse",
          y: 91,
        },
        {
          x: "skateboard",
          y: 277,
        },
        {
          x: "others",
          y: 61,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(155, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 92,
        },
        {
          x: "helicopter",
          y: 91,
        },
        {
          x: "boat",
          y: 223,
        },
        {
          x: "train",
          y: 172,
        },
        {
          x: "subway",
          y: 76,
        },
        {
          x: "bus",
          y: 154,
        },
        {
          x: "car",
          y: 20,
        },
        {
          x: "moto",
          y: 189,
        },
        {
          x: "bicycle",
          y: 16,
        },
        {
          x: "horse",
          y: 103,
        },
        {
          x: "skateboard",
          y: 156,
        },
        {
          x: "others",
          y: 232,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(306, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 287,
        },
        {
          x: "helicopter",
          y: 139,
        },
        {
          x: "boat",
          y: 135,
        },
        {
          x: "train",
          y: 146,
        },
        {
          x: "subway",
          y: 190,
        },
        {
          x: "bus",
          y: 263,
        },
        {
          x: "car",
          y: 37,
        },
        {
          x: "moto",
          y: 208,
        },
        {
          x: "bicycle",
          y: 118,
        },
        {
          x: "horse",
          y: 199,
        },
        {
          x: "skateboard",
          y: 63,
        },
        {
          x: "others",
          y: 28,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(141, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 200,
        },
        {
          x: "helicopter",
          y: 297,
        },
        {
          x: "boat",
          y: 126,
        },
        {
          x: "train",
          y: 237,
        },
        {
          x: "subway",
          y: 88,
        },
        {
          x: "bus",
          y: 75,
        },
        {
          x: "car",
          y: 109,
        },
        {
          x: "moto",
          y: 100,
        },
        {
          x: "bicycle",
          y: 15,
        },
        {
          x: "horse",
          y: 196,
        },
        {
          x: "skateboard",
          y: 119,
        },
        {
          x: "others",
          y: 196,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(70, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 191,
        },
        {
          x: "helicopter",
          y: 265,
        },
        {
          x: "boat",
          y: 186,
        },
        {
          x: "train",
          y: 62,
        },
        {
          x: "subway",
          y: 54,
        },
        {
          x: "bus",
          y: 145,
        },
        {
          x: "car",
          y: 181,
        },
        {
          x: "moto",
          y: 151,
        },
        {
          x: "bicycle",
          y: 264,
        },
        {
          x: "horse",
          y: 251,
        },
        {
          x: "skateboard",
          y: 110,
        },
        {
          x: "others",
          y: 239,
        },
      ],
    },
  ];
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineAreaChart;
