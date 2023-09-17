import * as React from "react";
import ReactEcharts from "./generic/echarts";
import { EChartsOption } from "echarts/types/dist/echarts";

import { Chart } from "types/visualizations";
import { constructSeries } from "@/lib/visualizations/chart/helper";
import { SeriesOption } from "echarts";
interface LineChartProp {
  data: Chart;
  colors: string[];
}

const LineChartView = ({ data, colors }: LineChartProp) => {
  const { headers, values } = data;
  const option: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },

    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: headers,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: constructSeries(values, colors, false, "line", false) as SeriesOption,
  };
  return (
    <div className="w-full mt-4 h-screens-90 sm:mt-6 lg:mt-8">
      <ReactEcharts
        option={option}
        className="w-full h-[90vh] sm:h-120 lg:h-160"
      />
    </div>
  );
};
export default LineChartView;
