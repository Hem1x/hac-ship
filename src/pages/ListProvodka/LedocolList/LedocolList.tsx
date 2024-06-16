import { Card, Flex, Pagination, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
const { Meta } = Card;
import classNames from 'classnames/bind';
import s from './LedocolList.module.scss';
import { api } from '@src/api/myApi/api';
import { ShipTableType, endpointEnum } from '@src/api/myApi/api.types';
const cn = classNames.bind(s);

const LedocolList = () => {
  const [currentPag, setCurrentPag] = useState(1);
  const [tableData, setTableData] = useState<ShipTableType[] | null>(null);

  useEffect(() => {
    api
      .get<ShipTableType[]>(endpointEnum.list_ships)
      .then((data) => setTableData(data));
  }, []);

  return (
    <Flex vertical gap={20}>
      <div className={cn('list')}>
        {['50 лет Победы', 'Ямал', 'Таймыр', 'Вайгач'].map((ship) => (
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={`/led/${ship}.jpg`} />}>
            <Meta
              title={`Корабль ${ship}`}
              description={
                tableData?.find((item) => item.ledokol === ship)?.id_provodki
              }
              style={{
                marginBottom: 15,
              }}
            />
            <Typography.Text
              style={{
                fontWeight: 800,
                color: 'red',
              }}>
              Отказано
            </Typography.Text>
          </Card>
        ))}
      </div>

      <Pagination
        style={{ display: 'block' }}
        total={36}
        onChange={(e) => setCurrentPag(e)}
        current={currentPag}
      />
    </Flex>
  );
};

export default LedocolList;
