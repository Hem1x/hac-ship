import { Button, Flex, Form, Select } from 'antd';
import React from 'react';

enum LedocolsFormEnum {
  day = 'day',
  iceState = 'iceState',
}

const LedocolsForm = () => {
  const [form] = Form.useForm();

  return (
    <Form style={{ width: 300 }} layout="vertical" onFinish={console.log}>
      <Form.Item name={LedocolsFormEnum.day} label="Выберите день">
        <Select
          options={[
            {
              label: 'День 1',
              value: '1',
            },
            {
              label: 'День 2',
              value: '2',
            },
            {
              label: 'День 3',
              value: '3',
            },
          ]}
        />
      </Form.Item>
      <Form.Item name={LedocolsFormEnum.iceState} label="Выберите состояние льда">
        <Select
          options={[
            {
              label: 'День 1',
              value: '1',
            },
            {
              label: 'День 2',
              value: '2',
            },
            {
              label: 'День 3',
              value: '3',
            },
          ]}
        />
      </Form.Item>
      <Flex justify="flex-end" gap={10}>
        <Form.Item style={{ flex: 1 }}>
          <Button
            style={{ width: '100%' }}
            onClick={() => form.resetFields()}
            type="default">
            отменить
          </Button>
        </Form.Item>
        <Form.Item style={{ flex: 1 }}>
          <Button style={{ width: '100%' }} htmlType="submit" type="primary">
            сохранить
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default LedocolsForm;
