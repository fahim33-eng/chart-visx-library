import React, { useState } from 'react'
import { Graph, Group } from '@visx/group'
import { Pie } from '@visx/shape'
import { Text } from '@visx/text'


export default function PieChart({ chartData }) {
    const width = 400
    const half = width / 2
    const [active, setActive] = useState(null)
    console.log(active?.color)
  return (
    <div className='pie-chart-container'>
        <h1>{chartData.chartName} - Using Pie Chart</h1>
        <svg width={width} height={width}>
            <Group top={half} left={half}>
                <Pie data = {chartData.data} pieValue={(data) => data.value * 1000} outerRadius={half}
                    innerRadius={({ data }) => {
                        const minus = data.id === active?.id ? 12 : 8
                        return half - minus
                    }} 
                    padAngle={.005}
                >
                    {
                        pie => {
                            return pie.arcs.map(arc => {
                                return (
                                    <g key={arc.data.id} onMouseEnter={() => setActive(arc.data)}
                                        onMouseLeave={() => setActive(null)}
                                    >
                                        <path d={pie.path(arc)} fill={arc.data.color}></path>
                                    </g>
                                )
                            })
                        }
                    }
                </Pie>
                <Text textAnchor='middle' fill={`${active?.color}`}>{active?.name}</Text>
            </Group>
        </svg>
    </div>
  )
}
