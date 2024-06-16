import {
  Col,
  DatePicker,
  Form,
  FormInstance,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import React, { useContext, useEffect } from 'react';
import { CreateOrderEnum } from '../CreateOrder.types';
import { ModuleContext } from '@src/App';
import { useNavigate } from 'react-router-dom';

const REQUIRED_MESSAGE = {
  required: true,
  message: 'Поле обязательно к заполнению',
};

interface TextFormProps {
  setIsModalOpen: (value: boolean) => void;
  form: FormInstance<any>;
}

const TextForm = ({ setIsModalOpen, form }: TextFormProps) => {
  const messageApi = useContext(ModuleContext);
  const navigate = useNavigate();

  const dateStart = Form.useWatch(CreateOrderEnum.dateStart, form);
  const dateEnd = Form.useWatch(CreateOrderEnum.dateEnd, form);

  useEffect(() => {
    if (dateStart > dateEnd) {
      form.setFieldValue(CreateOrderEnum.dateEnd, undefined);
      messageApi.info('Дата начала должна быть раньше даты окончания');
    }
  }, [dateStart]);

  const onFinishForm = (value: any) => {
    setIsModalOpen(false);
    navigate(-1);
  };

  return (
    <Form
      form={form}
      onFinish={onFinishForm}
      layout="vertical"
      style={{ marginTop: 25 }}>
      <Row gutter={12}>
        <Col span={16}>
          <Form.Item
            name={CreateOrderEnum.name}
            label="Наименование"
            rules={[REQUIRED_MESSAGE]}>
            <Input placeholder="Наименование" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={12}>
        <Col span={16}>
          <Form.Item
            name={CreateOrderEnum.class}
            label="Ледовый класс"
            rules={[REQUIRED_MESSAGE]}>
            <Select
              showSearch
              placeholder="Ледовый класс"
              options={[
                { value: 'class 1', label: 'Класс 1' },
                { value: 'class 2', label: 'Класс 2' },
                { value: 'class 3', label: 'Класс 3' },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={CreateOrderEnum.speed}
            label="Скорость"
            rules={[REQUIRED_MESSAGE]}>
            <InputNumber
              type="number"
              style={{ width: '100%' }}
              placeholder="Скорость"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={12}>
        <Col span={12}>
          <Form.Item
            name={CreateOrderEnum.dateStart}
            label="Дата начала"
            rules={[REQUIRED_MESSAGE]}>
            <DatePicker
              format={'DD.MM.YYYY'}
              style={{ width: '100%' }}
              placeholder="Дата начала"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            dependencies={[CreateOrderEnum.dateStart]}
            name={CreateOrderEnum.dateEnd}
            label="Дата окончания"
            rules={[REQUIRED_MESSAGE]}>
            <DatePicker
              format={'DD.MM.YYYY'}
              style={{ width: '100%' }}
              placeholder="Дата окончания"
              disabledDate={(current) => current.isBefore(dateStart)}
              disabled={!dateStart}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={12}>
        <Col span={12}>
          <Form.Item
            name={CreateOrderEnum.pointStart}
            label="Пункт начала"
            rules={[REQUIRED_MESSAGE]}>
            <Select
              showSearch
              placeholder="Пункт начала"
              options={[
                { value: 'point 1', label: 'Пункт 1' },
                { value: 'point 2', label: 'Пункт 2' },
                { value: 'point 3', label: 'Пункт 3' },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={CreateOrderEnum.pointEnd}
            label="Пункт окончания"
            rules={[REQUIRED_MESSAGE]}>
            <Select
              showSearch
              placeholder="Пункт окончания"
              options={[
                { value: 'point 1', label: 'Пункт 1' },
                { value: 'point 2', label: 'Пункт 2' },
                { value: 'point 3', label: 'Пункт 3' },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default TextForm;
