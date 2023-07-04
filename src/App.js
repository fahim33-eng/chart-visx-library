import './App.css';
import React, { useState } from 'react';
import PieChart from './component/PieChart';
import MyBarChart from './component/MyBarChart';
import MyLineChart from './component/MyLineChart';

const barChartData = {
  chartName: "Recall",
  data: [
    {
      id : 1,
      name: "Random",
      value: 0.2,
      color: "#D1D5DB",
    },
    {
      id : 2,
      name: "Shaped",
      value: 0.5,
      color: "#A855F7",
    },
    {
      id : 3,
      name: "Toplist",
      value: 0.8,
      color: "#0EA5E9",
    },
    {
      id : 4,
      name: "changed",
      value: 0.1,
      color: "#EEA5E0",
    },
    {
      id : 5,
      name: "diff",
      value: 0.1,
      color: "#333",
    },
  ],
};

const lines = [
  {
    title: "Personalized",
    color: "#8B5CF6",
    data: [
      {
        id : 1,
        name: "06/04", //x axis value
        val: 1000, //y axis value
      },
      {
        id : 2,
        name: "06/03",
        val: 2000,
      },
      {
        id : 3,
        name: "06/02",
        val: 1200,
      },
      {
        id : 4,
        name: "06/01",
        val: 4780,
      },
    ],
  },

  { 
  title: "Toplist", 
  color: "#22C55E",
  data: [
    {
      id : 1,
      name: "06/04", //x axis value
      val: 4000, //Y axis value
    },
    {
      id : 2,
      name: "06/03",
      val: 3000,
    },
    {
      id : 3,
      name: "06/02",
      val: 2000,
    },
    {
      id : 4,
      name: "06/01",
      val: 2780,
    },
  ] },
];

function App() {
  return (
    <div className="App">
      <MyLineChart chartData={lines} width={1000} height={600} />
      <MyBarChart chartData = {barChartData} width={600} height={600} right={10}/>
      {/* <PieChart chartData = {barChartData} /> */}
    </div>
  );
}

export default App;
