import { Typography } from 'antd';
import React, { useState } from 'react';
import { Cell, Legend, Pie, PieChart as PieChartRecharts } from 'recharts';

interface PieChartProps {
  data: {
    title?: string;
    subTitle?: string;
    chartData: {
      name: string;
      [key: string]: string | number;
    }[];
    nameKey: string;
    dataKey: string;
  };
  size?: number;
  colorList?: string[];
  label?: boolean;
}

const defaultColors = [
  '#FF5733', // Красный
  '#33FF57', // Зелёный
  '#5733FF', // Синий
  '#a0ff33', // Жёлтый
  '#33FFFF', // Бирюзовый
  '#FF33FF', // Фиолетовый
];

const PieChart = ({
  data,
  colorList = defaultColors,
  size = 150,
  label = false,
}: PieChartProps) => {
  const { title, subTitle, chartData, dataKey, nameKey } = data;

  return (
    <>
      {title && <Typography.Title level={4}>{title}</Typography.Title>}
      {subTitle && (
        <Typography.Paragraph style={{ color: '#a9a9a9', marginBottom: 20 }}>
          {subTitle}
        </Typography.Paragraph>
      )}
      <PieChartRecharts width={size + 50} height={size + 50}>
        <Legend />
        <Pie
          data={chartData}
          dataKey={dataKey}
          nameKey={nameKey}
          cx="50%"
          cy="50%"
          outerRadius={size * 0.35}
          innerRadius={size * 0.2}
          label={label}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colorList[index % colorList.length]} />
          ))}
        </Pie>
      </PieChartRecharts>
    </>
  );
};

export default PieChart;
