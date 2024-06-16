import { GeoObject } from '@pbe/react-yandex-maps';
import { IRequest } from '@src/api/myApi/api.types';
import { RoutePoints } from '@src/mock/route-points';
import React, { useEffect, useState } from 'react';
import { cmpMapStore } from '../../CmpMapStore';
interface ShipTrackerProps {
  ship: IRequest;
  sliderValue: number;
}

const ShipTracker = ({ ship, sliderValue }: ShipTrackerProps) => {
  const route = [
    {
      start: RoutePoints.find((el) => el.id === Number(ship.point_begin))!
        .coordinates,
      end: RoutePoints.find((el) => el.id === Number(ship.point_end))!.coordinates,
    },
  ];

  const step = 100;
  const routeSteps = step * route.length;

  const [currentCoords, setCurrentCoords] = useState(route[0].start);

  useEffect(() => {
    const currentSegmentIndex = Math.min(
      Math.floor(sliderValue / step),
      route.length - 1,
    );
    const currentSegment = route[currentSegmentIndex];
    const segmentStep = sliderValue % step;

    if (sliderValue === routeSteps) {
      setCurrentCoords(currentSegment.end);
      return;
    }

    const interpolate = (
      start: number,
      end: number,
      step: number,
      totalSteps: number,
    ) => {
      return start + ((end - start) * step) / totalSteps;
    };

    const currentLat = interpolate(
      currentSegment.start[0],
      currentSegment.end[0],
      segmentStep,
      step,
    );
    const currentLng = interpolate(
      currentSegment.start[1],
      currentSegment.end[1],
      segmentStep,
      step,
    );

    setCurrentCoords([currentLat, currentLng]);
  }, [sliderValue]);

  return (
    <GeoObject
      geometry={{
        type: 'Point',
        coordinates: currentCoords,
      }}
      options={{
        iconLayout: 'default#image',
        iconImageHref: ship.is_ledocol ? '/ledocol.svg' : '/ship.svg',
        iconImageSize: [40, 40],
        iconOffset: [0, 25],
      }}
      onClick={() => {
        cmpMapStore.selectShip(ship);
      }}
    />
  );
};

export default ShipTracker;
