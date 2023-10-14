import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";

const PieWrap = styled.div`
    height: 400px;
`

const PieHeader = styled.h2`
    color: #fff;
`

const PieTooltip = styled.div`
    background: white;
    padding: 9px 12px;
    border: 1px solid #012b37;
    display: flex;
    alignItems: center;
    justifyContent: center;
    flexDirection: column;
    color: #012b37;
`

const Pie = ({ data, header }: any) => {
  return (
    <PieWrap>
        <PieHeader>{header}</PieHeader>
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
            arcLinkLabelsTextColor="white"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
            tooltip={e => {
                return (
                    <PieTooltip>
                        {e.datum.id}: {e.datum.value}
                    </PieTooltip>
                );
            }} 
        />
    </PieWrap>
  );
};

export default Pie;
