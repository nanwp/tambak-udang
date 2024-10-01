import { PieChart } from "@mui/x-charts";
import React from "react";

interface PieChartComponentsProps {
    data: DataPieChart[];
}

export default function PieChartComponents(props: PieChartComponentsProps) {
    return (
        <>
            <PieChart
                series={[
                    {
                        data: props.data,
                        highlightScope: { fade: 'global', highlight: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    },
                ]}
                height={200}
            />
        </>
    )
}