import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { GeoObject } from '@pbe/react-yandex-maps';
import { observer } from 'mobx-react-lite';
import { cmpMapStore } from '../CmpMapStore';
import { ReactComponent as DrawerLogo } from '@icons/drawer-icon.svg';
import { ReactComponent as RouteIcon } from '@icons/route-icon.svg';
import { RoutePoints } from '@src/mock/route-points';
import classNames from 'classnames/bind';
import s from './Drawer.module.scss';
import { IRequest } from '@src/api/myApi/api.types';
import { formatTimestamp } from '@src/utils/getDateInFormat';
import StepsController from './StepsController/StepsController';
const cn = classNames.bind(s);

const Drawer: React.FC = observer(() => {
  const { selectedShip } = cmpMapStore;

  function calculateHoursBetweenDates(startDate: string, endDate: string) {
    const difference = Math.abs(
      new Date(endDate).getTime() - new Date(startDate).getTime(),
    );
    const hours = Math.round(difference / (1000 * 3600));
    return `~ ${hours} ч`;
  }

  const getPort = (port: number | string) => {
    return RoutePoints.find((el) => el.id === port)?.name;
  };

  const getLocation = (loc: number | string) => {
    const coordinates = RoutePoints.find((el) => el.id === loc)?.coordinates?.map(
      (el) => el.toFixed(5),
    );

    if (coordinates) {
      return `${coordinates[0]}, ${coordinates[1]}`;
    }

    return 'Нет данных';
  };

  return (
    <AnimatePresence>
      {selectedShip && (
        <motion.div
          initial={{ x: '100%' }}
          exit={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 40,
          }}
          className={cn('container')}>
          <div className={cn('content')}>
            <div className={cn('header')}>
              <DrawerLogo className={cn('header__logo')} />
              <h1 className={cn('header__title')}>Информация о заявке</h1>
            </div>

            <hr />

            <div className={cn('ship')}>
              <div className={cn('ship-info')}>
                <img
                  className={cn('ship-info__icon')}
                  src={selectedShip.is_ledocol ? '/ledocol.svg' : '/ship.svg'}
                  alt=""
                />
                <h1 className={cn('ship-info__name')}>{selectedShip.name}</h1>
              </div>
              <div className={cn('ship-info__params')}>
                <p>
                  <span className={cn('ship-info__param')}>IMO:{'   '}</span>
                  <span>{selectedShip.imo}</span>
                </p>
                <p>
                  <span className={cn('ship-info__param')}>
                    Ледовый класс:{'   '}
                  </span>
                  <span>{selectedShip.led_class}</span>
                </p>
                <p>
                  <span className={cn('ship-info__param')}>Скорость:{'   '}</span>
                  <span>{selectedShip.speed} узлов</span>
                </p>
              </div>
            </div>

            <hr />

            <div className={cn('route')}>
              <div className={cn('route-header')}>
                <RouteIcon />
                <h1 className={cn('route-header__title')}>Маршрут</h1>
              </div>
              <div className={cn('section')}>
                <p className={cn('section__label')}>Откуда</p>
                <div className={cn('section__detail')}>
                  <b className={cn('bold')}>Время:</b>{' '}
                  {formatTimestamp(selectedShip.date_begin)}
                </div>
                <div className={cn('section__detail')}>
                  <b className={cn('bold')}>Порт:</b>{' '}
                  {getPort(selectedShip.point_begin)}
                </div>
                <div className={cn('section__detail')}>
                  <b className={cn('bold')}>Loc:</b>{' '}
                  {getLocation(selectedShip.point_begin)}
                </div>
              </div>

              <div className={cn('section')}>
                <p className={cn('section__label')}>Куда</p>
                <div className={cn('section__detail')}>
                  <b className={cn('bold')}>Время:</b>{' '}
                  {formatTimestamp(selectedShip.date_end)}
                </div>
                <div className={cn('section__detail')}>
                  <b className={cn('bold')}>Порт:</b>{' '}
                  {getPort(selectedShip.point_end)}
                </div>
                <div className={cn('section__detail')}>
                  <b className={cn('bold')}>Loc:</b>{' '}
                  {getLocation(selectedShip.point_end)}
                </div>
              </div>
              <div>
                <StepsController />
              </div>
            </div>

            <div className={cn('route-time')}>
              <h1 className={cn('route-time__title')}>Маршрутное время</h1>
              <h1 className={cn('route-time__time')}>
                {calculateHoursBetweenDates(
                  selectedShip.date_end,
                  selectedShip.date_begin,
                )}
              </h1>
            </div>

            <button
              className={cn('close-button')}
              onClick={() => cmpMapStore.clearShip()}>
              Закрыть
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default Drawer;
