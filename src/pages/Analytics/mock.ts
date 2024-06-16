import { Tile } from './AnalyticsTile/AnalyticsTile';

export const tiles1: Tile[] = [
  {
    name: 'Кол-во караванов',
    value: 3,
    sign: null,
  },
  {
    name: 'Ср. численность караванов',
    value: 2,
    sign: 'шт. кораблей',
  },
  {
    name: 'Ср. кол-во часов исп. ледоколов',
    value: 85,
    sign: '%',
  },
  {
    name: 'Ср. % занятости',
    value: 85,
    sign: '%',
  },
];

export const tiles2: Tile[] = [
  {
    name: '50 лет Победы',
    value: 1140,
    sign: 'часов',
  },
  {
    name: 'Ямал',
    value: 988,
    sign: 'часов',
  },
  {
    name: 'Таймыр',
    value: 886,
    sign: 'часов',
  },
  {
    name: 'Вайгач',
    value: 1018,
    sign: 'часов',
  },
];

export const tiles3: Tile[] = [
  {
    name: 'Ср. опоздание',
    value: 3,
    sign: null,
  },
  {
    name: 'Кол-во заявок на проводки',
    value: 80,
    sign: '%',
  },
  {
    name: 'Среднее время в пути',
    value: 85,
    sign: '%',
  },
];
