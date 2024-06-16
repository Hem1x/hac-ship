import { Button, Drawer, Flex, Form, Input, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { getColumnsProvodka } from './getColumnsProvodka';
import { FilterOutlined } from '@ant-design/icons';
import { ShipTableType, endpointEnum } from '@src/api/myApi/api.types';
import { api } from '@src/api/myApi/api';

const TableProvodka = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [tableData, setTableData] = useState<ShipTableType[] | null>(null);

  useEffect(() => {
    api
      .get<ShipTableType[]>(endpointEnum.list_ships)
      .then((data) => setTableData(data));
  }, []);

  const data = tableData?.map((item) => ({
    key: item.ship_name,
    name: item.ship_name,
    requestNumber: item.id_provodki,
    pointStart: item.start_point,
    dateStart: item.start_date,
    dateEnd: item.finish_time_plan,
    pointEnd: item.end_point,
    isDelayed: false,
    ledocol: item.ledokol,
  }));

  return (
    <div>
      <Flex justify="space-between" style={{ marginBottom: 20 }}>
        <Typography.Title level={2}>Таблица проводок</Typography.Title>
        <Flex gap={10} align="center">
          <FilterOutlined style={{ color: '#1677ff', fontSize: 16 }} />
          <Typography.Link
            onClick={() => setOpenFilter(true)}
            style={{ fontSize: 16 }}>
            фильтр
          </Typography.Link>
        </Flex>
      </Flex>

      <Table dataSource={data} columns={getColumnsProvodka} />

      <Drawer
        title={'Фильтр'}
        open={openFilter}
        onClose={() => setOpenFilter(false)}>
        <Form layout="vertical">
          <Form.Item name={'requestNumber'} label="Номер заявки">
            <Input placeholder="Введите номер заявки" />
          </Form.Item>

          <Form.Item name={'ship'} label="Судно">
            <Input placeholder="Введите cудно" />
          </Form.Item>

          <Form.Item name={'requestNumber'} label="Дата и точка отправления">
            <Input placeholder="Дата и точка отправления" />
          </Form.Item>

          <Form.Item name={'requestNumber'} label="Дата и точка прибытия">
            <Input placeholder="Дата и точка прибытия" />
          </Form.Item>

          <Form.Item name={'requestNumber'} label="Опоздание">
            <Input placeholder="Опоздание" />
          </Form.Item>

          <Form.Item name={'requestNumber'} label="Ледокол">
            <Input placeholder="Опоздание" />
          </Form.Item>

          <Form.Item>
            <Flex vertical gap={10}>
              <Button type="primary">Применить</Button>
              <Button type="default">Сбросить фильтр</Button>
            </Flex>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default TableProvodka;
