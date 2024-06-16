import { Card, Flex, Pagination, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
const { Meta } = Card;
import classNames from 'classnames/bind';
import s from './CardList.module.scss';
import { api } from '@src/api/myApi/api';
import { ShipTableType, endpointEnum } from '@src/api/myApi/api.types';
const cn = classNames.bind(s);

const CardList = () => {
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
        {tableData
          ?.slice((currentPag - 1) * 6, (currentPag - 1) * 6 + 6)
          .map((ship) => (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src={`/ships/${Math.floor(Math.random() * 5) + 1}.jpg`}
                />
              }>
              <Meta
                title={`Корабль ${ship.ship_name}`}
                description={ship.id_provodki}
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

export default CardList;
