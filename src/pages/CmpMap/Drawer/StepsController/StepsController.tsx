import React, { useState } from 'react';
import { Divider, Steps, Typography } from 'antd';
import classNames from 'classnames/bind';
import s from './StepsController.module.scss';
const cn = classNames.bind(s);

const StepsController: React.FC = () => {
  const [showRouteMap, setShowRouteMap] = useState(false);

  return (
    <>
      <Typography.Link onClick={() => setShowRouteMap((prev) => !prev)}>
        Карта маршрута
      </Typography.Link>

      <div className={cn(`steps${showRouteMap ? '' : '__hidden'}`)}>
        <Steps
          progressDot
          current={1}
          direction="vertical"
          items={[
            {
              title: 'Сабетта 1',
              description: 'Старт. 13:50 01/01',
            },
            {
              title: 'Сабетта 2',
              description: 'промежуточная точка',
            },
            {
              title: 'Сабетта 3',
              description: 'Сформирован караван 1',
            },
            {
              title: 'Сабетта 4',
              description: 'Финиш. 13:50 01/01',
            },
          ]}
        />
      </div>
    </>
  );
};

export default StepsController;
