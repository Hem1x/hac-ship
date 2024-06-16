import { Flex, Form, Modal, Segmented, Tooltip, Typography } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModuleContext } from '@src/App';
import { InfoCircleOutlined } from '@ant-design/icons';
import UploadForm from './UploadForm/UploadForm';
import TextForm from './TextForm/TextForm';

type FormType = 'form' | 'file';

const ModalTitle = ({
  setSelectedFormView,
}: {
  setSelectedFormView: (value: FormType) => void;
}) => {
  return (
    <>
      <Flex align="center" gap={20}>
        <Typography.Title style={{ margin: 0 }} level={4}>
          Создание заявки
        </Typography.Title>
        <Flex align="center" gap={10}>
          <Segmented
            onChange={(value) => {
              setSelectedFormView(value as FormType);
            }}
            options={[
              {
                label: 'Заполнить форму',
                value: 'form',
              },
              {
                label: 'Загрузить файл',
                value: 'file',
              },
            ]}
          />
          <Tooltip
            color="blue"
            title={
              <>
                <h1>Вы можете заполнить заявку 2-мя способами:</h1>
                <p>1) Через форму</p>
                <p>2) Через добавление файла в формате excel</p>
              </>
            }>
            <InfoCircleOutlined />
          </Tooltip>
        </Flex>
      </Flex>
    </>
  );
};

const CreateOrder = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const messageApi = useContext(ModuleContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormView, setSelectedFormView] = useState<FormType>('form');

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const onCancel = () => {
    setIsModalOpen(false);
    navigate(-1);
  };

  return (
    <>
      <div>
        <Modal
          title={<ModalTitle setSelectedFormView={setSelectedFormView} />}
          open={isModalOpen}
          width={'50%'}
          cancelText="Отменить заявку"
          okText="Добавить корабль"
          onOk={() => form.submit()}
          onCancel={onCancel}>
          {selectedFormView === 'form' ? (
            <TextForm form={form} setIsModalOpen={setIsModalOpen} />
          ) : (
            <UploadForm />
          )}
        </Modal>
      </div>
    </>
  );
};

export default CreateOrder;
