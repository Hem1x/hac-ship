import {
  Form,
  Typography,
  DatePicker,
  Button,
  Checkbox,
  Divider,
  CheckboxProps,
  Space,
  Radio,
  Select,
  Flex,
} from 'antd';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import s from './Filter.module.scss';
const cn = classNames.bind(s);
const { RangePicker } = DatePicker;

enum FilterEnum {
  date = 'date',
  class = 'class',
  rejected = 'rejected',
}

const Filter = () => {
  const [form] = Form.useForm();

  const defaultCheckedList = [
    'No ice class',
    'Ice1',
    'Ice2',
    'Ice3',
    'Arc4',
    'Arc5',
    'Arc6',
    'Arc7',
    'Arc8',
    'Arc9',
  ];

  return (
    <div className={cn('filter')}>
      <Typography.Title level={4}>фильтры</Typography.Title>
      <Form form={form} layout="vertical" onFinish={console.log}>
        <Form.Item name={FilterEnum.date} label="Дата отправления">
          <RangePicker
            format={'DD.MM.YYYY'}
            style={{ width: '100%' }}
            placeholder={['с', 'до']}
          />
        </Form.Item>
        <Form.Item name={FilterEnum.class} label="Ледовый класс">
          <Radio.Group>
            <Space direction="vertical">
              {defaultCheckedList.map((el) => (
                <Radio value={el}>{el}</Radio>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item name={FilterEnum.class} label="Ледовый класс">
          <Select
            options={defaultCheckedList.map((el) => ({ label: el, value: el }))}
          />
        </Form.Item>

        <Form.Item name={FilterEnum.rejected} label="Отказано">
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={1}>Да</Radio>
              <Radio value={2}>Нет</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Flex vertical gap={10}>
            <Button
              type="primary"
              className={cn('filter-button', 'apply')}
              htmlType="submit">
              Применить фильтр
            </Button>
            <Button
              type="link"
              className={cn('filter-button', 'reset')}
              onClick={() => form.resetFields()}>
              Сбросить фильтр
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Filter;
