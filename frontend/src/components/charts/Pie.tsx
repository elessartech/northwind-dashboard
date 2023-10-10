import { ResponsivePie } from "@nivo/pie";

const Pie = ({ data, header }: any) => {
  return (
    <div style={{ height: 400 }}>
        <h2 style={{color: "black"}}>{header}</h2>
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
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
                        {e.datum.id} / {e.datum.value}
                    </div>
                );
            }} 
        />
    </div>
  );
};

export default Pie;
