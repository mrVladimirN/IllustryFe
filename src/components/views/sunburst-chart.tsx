"use client";
import { EChartsOption } from "echarts";
import React from "react";
import { HierarchyData } from "types/visualizations";
import {
  computeCategories,
  computeNodesHierarchy,
} from "@/lib/visualizations/hierarchy-charts/helper";
import Legend from "../ui/legend";
import { computeLegendColors } from "@/lib/visualizations/calendar/helper";
import { with_legend, with_options } from "@/lib/types/utils";
import { useThemeColors } from "../theme-provider";
import dynamic from "next/dynamic";

interface SunburstViewProp extends with_legend, with_options {
  data: HierarchyData;
}
const ReactEcharts = dynamic(() => import("./generic/echarts"), { ssr: false });
const SunburstView = ({ data, legend, options }: SunburstViewProp) => {
  const activeTheme = useThemeColors();
  const theme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : "light";
  const isDarkTheme = theme === "dark";
  const colors = isDarkTheme
    ? activeTheme.sunburst.dark.colors
    : activeTheme.sunburst.light.colors;

  const { nodes } = data;
  const categories = computeCategories(nodes);
  const option: EChartsOption = {
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
      //@ts-ignore
      formatter: function (params) {
        //@ts-ignore
        return params.data.prop;
      },
    },
    series: [
      {
        type: "sunburst",
        data: computeNodesHierarchy(nodes, categories, colors),
      },
    ],
  };
  return (
    <div className="relative mt-[4%] flex flex-col items-center">
      {legend && (
        <Legend legendData={computeLegendColors(categories, colors)} />
      )}
      <div className="w-full mt-4 h-[80vh]">
        <ReactEcharts option={option} className="w-full h-full" />
      </div>
    </div>
  );
};

export default SunburstView;
