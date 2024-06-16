import { Flex, Typography, Upload } from 'antd';
import classNames from 'classnames/bind';
import s from './UploadForm.module.scss';
import { InboxOutlined } from '@ant-design/icons';
const cn = classNames.bind(s);
const { Link, Title } = Typography;
const { Dragger } = Upload;

const UploadForm = () => {
  return (
    <div className={cn('upload')}>
      <Title level={5}>Загрузка файла</Title>
      <div className={cn('upload__message')}>
        Вы можете загрузить excel файл для массового заведения проводок. Эта функция
        будет полезна для массовой выгрузки данных на будущие периоды или если это
        массовый заказчик проводок
      </div>

      <div className={cn('upload__info')}>
        <Flex align="center" justify="space-between">
          <div>
            <h4 className={cn('upload__info-title')}>Инструкция по загрузке:</h4>
            <ul className={cn('upload__info-list')}>
              <li>
                &emsp;1. Скачайте шаблон файла <Link>&emsp;скачать</Link>
              </li>
              <li>&emsp;2. Заполните шаблон</li>
              <li>&emsp;3. Загрузите заполненный файл</li>
            </ul>
          </div>

          <Dragger>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Нажмите или перетащите файл в эту область, чтобы загрузить
            </p>
            <p className="ant-upload-hint">
              Поддержка загрузки как одного так и нескольких файлов.
            </p>
          </Dragger>
        </Flex>
      </div>
    </div>
  );
};

export default UploadForm;
