import { TableProps, Tag } from 'antd';

interface DataType {
  key: string;
  name: string;
  requestNumber: number;
  pointDateStart: string;
  pointDateEnd: string;
  isDelayed: boolean;
  ledocol: string;
}

export const getColumnsProvodka: TableProps<DataType>['columns'] = [
  {
    width: 200,
    title: 'Судно',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Номер заявки',
    dataIndex: 'requestNumber',
    key: 'requestNumber',
  },
  {
    title: 'Дата отправления',
    dataIndex: 'dateStart',
    key: 'dateStart',
  },
  {
    title: 'Точка отправления',
    dataIndex: 'pointStart',
    key: 'pointStart',
  },
  {
    title: 'Дата прибытия',
    dataIndex: 'dateEnd',
    key: 'dateEnd',
  },
  {
    title: 'Точка прибытия',
    dataIndex: 'pointEnd',
    key: 'pointEnd',
  },
  {
    title: 'Опоздание',
    dataIndex: 'isDelayed',
    key: 'isDelayed',
    render: (_, { isDelayed }) => (isDelayed ? 'Да' : 'Нет'),
  },
  {
    width: 300,
    title: 'Ледокол',
    dataIndex: 'ledocol',
    key: 'ledocol',
    render: (_, { ledocol }) => <Tag color="blue-inverse">{ledocol}</Tag>,
  },
];
