import { Flex, Typography } from 'antd';
import React, { useState } from 'react';
import { ReactComponent as Arrow } from '@icons/chevron.svg';
import LedocolsForm from './LedocolsForm/LedocolsForm';
import ProvodkiForm from './ProvodkiForm/ProvodkiForm';
import WeatherForm from './WeatherForm/WeatherForm';
import classNames from 'classnames/bind';
import s from './ChangeForm.module.scss';
const cn = classNames.bind(s);

type SelectedFormType = 'weather' | 'ledocols' | 'provodki' | null;

interface DataInterface {
  title: string;
  text: string;
  value: SelectedFormType;
}

const ChangeForm = () => {
  const [selectedForm, setSelectedForm] = useState<SelectedFormType>(null);

  const data: DataInterface[] = [
    {
      title: 'Погодные условия',
      text: 'изменение погодных условий вручную',
      value: 'weather',
    },
    {
      title: ' Ледоколы',
      text: 'Изменение графика',
      value: 'ledocols',
    },
    {
      title: 'Проводки',
      text: 'Изменения графика',
      value: 'provodki',
    },
  ];

  return (
    <div>
      <Typography.Title level={2} style={{ marginBottom: 40 }}>
        Внести изменения
      </Typography.Title>
      <Typography.Title level={4} style={{ marginBottom: 20 }}>
        Выберите куда хотите внести изменения
      </Typography.Title>
      <div style={{ display: 'flex', gap: 24 }}>
        {data.map((el) => (
          <>
            <Flex
              className={cn(
                `container${selectedForm === el.value ? '__active' : ''}`,
              )}
              justify="space-between"
              align="center"
              onClick={() => setSelectedForm(el.value)}>
              <div>
                <p
                  className={cn(
                    `title${selectedForm === el.value ? '__active' : ''}`,
                  )}>
                  {el.title}
                </p>
                <span
                  className={cn(
                    `text${selectedForm === el.value ? '__active' : ''}`,
                  )}>
                  {el.text}
                </span>
              </div>
              <Arrow />
            </Flex>
          </>
        ))}
      </div>
      <div style={{ paddingTop: 40, margin: '0 auto', width: 'fit-content' }}>
        {selectedForm === 'ledocols' && <LedocolsForm />}
        {selectedForm === 'provodki' && <ProvodkiForm />}
        {selectedForm === 'weather' && <WeatherForm />}
      </div>
    </div>
  );
};

export default ChangeForm;
