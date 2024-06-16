import { Typography } from 'antd';
import s from './AnalyticsTile.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(s);

export type Tile = {
  name: string;
  value: number;
  sign: string | null;
};

const AnalyticsTile = ({ tiles }: { tiles: Tile[] }) => {
  return (
    <div className={cn('container')}>
      <div className={cn('parametrs')}>
        {tiles.map((el) => (
          <div className={cn('parametrs__item')}>
            <Typography.Text className={cn('parametrs__item-name')}>
              {el.name}
            </Typography.Text>
            <Typography.Text className={cn('parametrs__item-value')}>
              {el.value}
              <span className={cn('parametrs__item-sign')}>{el.sign}</span>
            </Typography.Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsTile;
