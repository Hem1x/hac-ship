import React, { useEffect, useState } from 'react';
import {
  YMaps,
  Map,
  ZoomControl,
  RulerControl,
  GeoObject,
} from '@pbe/react-yandex-maps';
import { Slider } from 'antd';
import { routeLines } from '@src/mock/route';
import { api } from '@src/api/myApi/api';
import { IRequest, endpointEnum } from '@src/api/myApi/api.types';
import { RoutePoints } from '@src/mock/route-points';
import { observer } from 'mobx-react-lite';
import { cmpMapStore } from '../CmpMapStore';
import s from './MapApi.module.scss';
import classNames from 'classnames/bind';
import ShipTracker from './ShipTracker/ShipTracker';
const cn = classNames.bind(s);

const MapApi: React.FC = observer(() => {
  const [mapState, setMapState] = useState<IRequest[] | null>(null);
  const { selectedShip } = cmpMapStore;

  useEffect(() => {
    api.get<IRequest[]>(endpointEnum.map_info).then((res) => setMapState(res));
  }, []);

  const renderLines = () => {
    return routeLines.features.map((el) => (
      <GeoObject
        key={el.properties.id}
        {...el}
        options={{
          geodesic: true,
          strokeWidth: 1,
          strokeColor: '#000',
        }}
      />
    ));
  };
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <>
      <YMaps>
        <Map
          width="100%"
          height="100vh"
          options={{ minZoom: 4 }}
          defaultState={{
            center: [73.183542, 60.429568],
            zoom: 5,
          }}>
          {renderLines()}
          {!selectedShip &&
            mapState?.length !== 0 &&
            mapState?.map((ship: IRequest) => (
              <div key={ship.id}>
                <ShipTracker ship={ship} sliderValue={sliderValue} />
              </div>
            ))}
          <ZoomControl />
          <RulerControl />
          {selectedShip && (
            <>
              <GeoObject
                geometry={{
                  type: 'Point',
                  coordinates: RoutePoints.find(
                    (el) => el.id === Number(selectedShip?.point_end),
                  )?.coordinates,
                }}
              />
              <GeoObject
                geometry={{
                  type: 'Point',
                  coordinates: RoutePoints.find(
                    (el) => el.id === Number(selectedShip?.point_begin),
                  )?.coordinates,
                }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: selectedShip.is_ledocol
                    ? '/ledocol.svg'
                    : '/ship.svg',
                  iconImageSize: [40, 40],
                  iconOffset: [0, 25],
                }}
              />
            </>
          )}
        </Map>
      </YMaps>
      <div className={cn('container')}>
        <Slider value={sliderValue} max={100} onChange={setSliderValue} />
      </div>
    </>
  );
});

export default MapApi;
