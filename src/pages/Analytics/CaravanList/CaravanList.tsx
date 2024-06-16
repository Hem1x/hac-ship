import { Space, Tag, Typography } from 'antd';
import React from 'react';
import { ReactComponent as FileIcon } from '@icons/file-icon.svg';
import classNames from 'classnames/bind';
import s from './CaravanList.module.scss';
const cn = classNames.bind(s);

interface CaravanListType {
  tag: string;
  title: string;
  text: string;
  date: string;
}

const caravanList: CaravanListType[] = [
  {
    tag: 'Ледокол - ямал',
    title: 'Корабли: пзлуалула, з С,вхппл, впзпgfdgdfgdfgfdgв',
    text: 'Точка формирования: Сабетта-1',
    date: '22.03',
  },
  {
    tag: 'Ледокол - ямал',
    title: 'Корабли: пзлуалула, з С,вхппл, впзпdfgdfgdfgdfgв',
    text: 'Точка формирования: Сабетта-1',
    date: '22.03',
  },
  {
    tag: 'Ледокол - ямал',
    title: 'Корабли: пзлуалула, з С,вхппл, впзdfgdfgdfggdfпв',
    text: 'Точка формирования: Сабетта-1',
    date: '22.03',
  },
];

const CaravanList = () => {
  return (
    <div>
      <Typography.Title level={4} style={{ marginBottom: 20 }}>
        Список караванов
      </Typography.Title>
      <div className={cn('caravan-list')}>
        {caravanList.map((el) => (
          <div className={cn('caravan-item')}>
            <div className={cn('caravan-item__head')}>
              <Tag color="#F4F4F8" style={{ color: 'black' }}>
                {el.tag}
              </Tag>
              <span className={cn('caravan-item__head-date')}>{el.date}</span>
            </div>
            <span className={cn('caravan-item__title')}>{el.title}</span>
            <span className={cn('caravan-item__text')}>{el.text}</span>
          </div>
        ))}
      </div>
      <Space direction="horizontal">
        <FileIcon />
        <Typography.Link>Скачать Excel файл с расписанием</Typography.Link>
      </Space>
    </div>
  );
};

export default CaravanList;
