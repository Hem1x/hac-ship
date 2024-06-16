import { Typography } from 'antd';
import React from 'react';
import AnalyticsTile, { Tile } from './AnalyticsTile/AnalyticsTile';
import { tiles1, tiles2, tiles3 } from './mock';
import CaravanList from './CaravanList/CaravanList';

interface AnalyticsRowProps {
  title: string;
  tiles: Tile[];
}

const AnalyticsRow = ({ title, tiles }: AnalyticsRowProps) => {
  return (
    <div>
      <Typography.Title level={4} style={{ marginBottom: 20 }}>
        {title}
      </Typography.Title>
      <AnalyticsTile tiles={tiles} />
    </div>
  );
};

const Analytics = () => {
  return (
    <div>
      <Typography.Title level={2} style={{ marginBottom: 40 }}>
        Аналитика
      </Typography.Title>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <AnalyticsRow title="Работа ледоколов" tiles={tiles1} />
        <AnalyticsRow
          title="Время использования ледоколов за период"
          tiles={tiles2}
        />
        <AnalyticsRow title="Аналитика проводок" tiles={tiles3} />
        <CaravanList />
      </div>
    </div>
  );
};

export default Analytics;
