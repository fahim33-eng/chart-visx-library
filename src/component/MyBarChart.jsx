import React, { useMemo } from 'react';
import { Group } from '@visx/group';
import { Axis, Bar, BarSeries, Grid, XYChart } from '@visx/xychart'

export default function MyBarChart({ chartData, height, width, top = 20, left = 30, right = 0, bottom = 70 }) {


  return (
    <div className='mt-16 ml-4 p-8'>
      <h1 className='py-4'>Using Bar Chart :</h1>
      <XYChart height={height} margin={{ top : top, left : left, right : right, bottom : bottom }} width={width} xScale={{ type: "band", padding: 0.4 }}  yScale={{ type: "linear", domain : [0, 1] }}>
      <svg className='rectange' width={width} height={1000}>
        <rect width={width- 30} transform='translate(30, 1)' height={height - 70} margin={{left : 150}} strokeWidth={1} strokeOpacity={1} fill='#fff' stroke='#aaa'/>    
        <BarSeries
          dataKey="something"
          data={chartData.data}
          xAccessor={data => data.name}
          yAccessor={data => data.value}
          colorAccessor={data => data.color}
          radius={4}
          radiusTop
          />
      </svg>
      <Axis hideAxisLine hideTicks numTicks={4} orientation="left" />
      <Axis hideAxisLine hideTicks orientation="bottom" tickLabelProps={value => {
        return ({
          angle : -90,
          dy : 20
        })
      }}/>

      </XYChart>
    </div>
  )
}
