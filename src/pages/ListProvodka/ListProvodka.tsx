import { Flex, Pagination, Space, Typography } from 'antd';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as FileIcon } from '@icons/file-icon.svg';
import s from './ListProvodka.module.scss';
import Filter from './Filter/Filter';
import CardList from './CardList/CardList';
import LedocolList from './LedocolList/LedocolList';
const cn = classNames.bind(s);

const ListProvodka = () => {
  const [selectedValue, setSelectedValue] = useState<'provodka' | 'icebreaker'>(
    'provodka',
  );

  return (
    <div className={cn('provodka')}>
      <Typography.Title style={{ marginBottom: 40 }} level={2}>
        Список проводок
      </Typography.Title>
      <Flex justify="space-between" align="center" style={{ marginBottom: 40 }}>
        <div className={cn('switcher')}>
          <div
            onClick={() => setSelectedValue('provodka')}
            className={cn('switcher__item', {
              selected: selectedValue === 'provodka',
            })}>
            Проводка
            {selectedValue === 'provodka' && (
              <span style={{ color: '#939393' }}>&emsp;42</span>
            )}
          </div>
          <div
            onClick={() => setSelectedValue('icebreaker')}
            className={cn('switcher__item', {
              selected: selectedValue === 'icebreaker',
            })}>
            Ледоколы
            {selectedValue === 'icebreaker' && (
              <span style={{ color: '#939393' }}>&emsp;4</span>
            )}
          </div>
        </div>
        <Space direction="horizontal">
          <FileIcon />
          <Typography.Link>Скачать Exel файл с расписанием</Typography.Link>
        </Space>
      </Flex>

      <Flex justify="space-between" align="top">
        {selectedValue === 'provodka' && <CardList />}
        {selectedValue === 'icebreaker' && <LedocolList />}
        <Filter />
      </Flex>
    </div>
  );
};

export default ListProvodka;
