import { Tooltip, Typography } from 'antd';
import React from 'react';
import {
  Bar,
  BarChart as BarChartRecharts,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

interface BarChartProps {
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

const defaultColors = [
  '#FF5733', // Красный
  '#33FF57', // Зелёный
  '#5733FF', // Синий
  '#a0ff33', // Жёлтый
  '#33FFFF', // Бирюзовый
  '#FF33FF', // Фиолетовый
];

const BarChart = ({
  data,
  widthInPercent = 100,
  aspect = 5,
  colorList = defaultColors,
  label = false,
}: BarChartProps) => {
  const { title, subTitle, chartData, nameKey, dataKeys } = data;
  return (
    <>
      {title && <Typography.Title level={4}>{title}</Typography.Title>}
      {subTitle && (
        <Typography.Paragraph style={{ color: '#a9a9a9', marginBottom: 20 }}>
          {subTitle}
        </Typography.Paragraph>
      )}
      <ResponsiveContainer width={`${widthInPercent}%`} aspect={aspect}>
        <BarChartRecharts data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={nameKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((key, index) => (
            <Bar label={label} dataKey={key} fill={colorList[index]} />
          ))}
        </BarChartRecharts>
      </ResponsiveContainer>
    </>
  );
};

export default BarChart;
