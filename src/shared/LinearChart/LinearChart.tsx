import { capitalizeFirstLetter } from '@src/utils/capitalizeStr';
import { Typography } from 'antd';
import React, { useEffect, useReducer, useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const defaultColors = [
  '#FF5733', // Красный
  '#33FF57', // Зелёный
  '#5733FF', // Синий
  '#a0ff33', // Жёлтый
  '#33FFFF', // Бирюзовый
  '#FF33FF', // Фиолетовый
];

interface LinearChartProps {
  data: {
    title?: string;
    subTitle?: string;
    chartData: any[];
    nameKey: string;
    dataKeys: string[];
  };
  widthInPercent?: number;
  aspect?: number;
  colorList?: string[];
  label?: boolean;
}

const LinearChart = ({
  data,
  widthInPercent = 100,
  colorList = defaultColors,
  aspect = 5,
  label = false,
}: LinearChartProps) => {
  const { title, subTitle, chartData, dataKeys, nameKey } = data;
  const lines = dataKeys.map((el) => ({
    dataKey: el,
    id: `color${capitalizeFirstLetter(el)}`,
    fill: `url(#color${capitalizeFirstLetter(el)})`,
  }));

  return (
    <>
      {title && <Typography.Title level={4}>{title}</Typography.Title>}
      {subTitle && (
        <Typography.Paragraph style={{ color: '#a9a9a9', marginBottom: 20 }}>
          {subTitle}
        </Typography.Paragraph>
      )}
      <ResponsiveContainer width={`${widthInPercent}%`} aspect={aspect}>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            {lines.map((line, index) => (
              <linearGradient key={line.id} id={line.id} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colorList[index]} stopOpacity={0.8} />
                <stop offset="95%" stopColor={colorList[index]} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <XAxis dataKey={nameKey} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          {lines.map((line, index) => (
            <Area
              key={line.id}
              type="monotone"
              dataKey={line.dataKey}
              stroke={colorList[index]}
              fillOpacity={1}
              label={label}
              fill={line.fill}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default LinearChart;
