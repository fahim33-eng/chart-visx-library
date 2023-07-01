import React from 'react'
import { Axis, Grid, LineSeries, XYChart, AnimatedAxis, AnimatedGrid, AnimatedLineSeries, Tooltip } from "@visx/xychart";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleTime, scaleLinear } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { curveMonotoneX } from "@visx/curve";
import { Group } from "@visx/group";

export default function MyLineChart({ chartData, width, height }) {
  const xAxisLabels = ["06/06","06/05","06/04", "06/03", "06/02", "06/01"]
    console.log(chartData[0].color)

  return (
    <div>
        <h1 className='p-4 ml-4'> Line Chart :</h1>
        <div className='flex justify-between items-center px-24'>
        <XYChart className="line-chart-container" xScale={{ type: "band", domain : xAxisLabels }} yScale={{ type: "linear", domain:[0, 6000] }} height={height} width={width}
        style={{ backgroundColor: "lightgray", border: "1px solid gray" }}
        >
            <svg width={width} height={height}> 
            <rect width={width - 150} height={height - 100} transform='translate(80, 40)' strokeWidth={1} strokeOpacity={1} fill='#fff' stroke='#ccc'/>    
                <Grid numTicks={5} columns={false} lineStyle={{
                        stroke: "#2211e1",
                        strokeLinecap: "round",
                        strokeWidth: 0
                    }}
                    strokeDasharray="0, 4" />
                {
                    chartData.map(line => {
                        console.log(line)
                        return (
                            <LineSeries
                                dataKey={line.title}
                                data={line.data}
                                xAccessor={data => data.name}
                                yAccessor={data => data.val}
                                stroke={line.color}
                            />
                        )
                    })
                }
                </svg>
            <Axis hideAxisLine hideTicks orientation="bottom" numTicks={8} tickLabelProps={value => {
                return ({
                    dy : 10
                })
            }} />
            <Axis
                hideAxisLine
                hideTicks
                orientation="right"
                numTicks={6}
                
            />

            </XYChart>
            <div className='space-y-4'>
                {/* <h1 style={{color : `${chartData[0].color}`}}>{chartData[0].title}</h1>
                <h1 style={{color : `${chartData[1].color}`}}>{chartData[1].title}</h1> */}
                {
                    chartData.map(chart => <h1 className={`text-xl`} style={{color : `${chart.color}`}}>{chart.title}</h1>)
                }
            </div>
        </div>

    </div>
  )
}
