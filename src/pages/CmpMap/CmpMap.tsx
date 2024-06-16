import React from 'react';
import MapApi from './MapApi/MapApi';
import './CmpMap.scss';
import Drawer from './Drawer/Drawer';

const CmpMap: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <MapApi />
      <Drawer />
    </div>
  );
};

export default CmpMap;
