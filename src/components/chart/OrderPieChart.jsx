import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const OrderPieChart = () => {
  const option = {
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#1158e2",
        },
        {
          offset: 1,
          color: "#42B5F2",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#BC1FD7",
        },
        {
          offset: 1,
          color: "#7F1DD1",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#E8A618",
        },
        {
          offset: 1,
          color: "#EB6B36",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#D131BE",
        },
        {
          offset: 1,
          color: "#BF1575",
        },
      ]),
    ],
    // tooltip: {
    //   trigger: "item",
    // },
    // legend: {
    //   top: "5%",
    //   left: "center",
    // },
    series: [
      {
        name: "Item",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 50,
          borderColor: "black",
          borderWidth: 5,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        // labelLine: {
        //   show: false,
        // },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
        ],
      },
    ],
  };

  return (
    <ReactECharts style={{ height: 140, marginTop: "1rem" }} option={option} />
  );
};

export default OrderPieChart;
