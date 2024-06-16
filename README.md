БИБЛИОТЕКИ

- Ant-design
- MobX
- classnames
- html2canvas
- file-saver
- jspdf
- react-router
- react-transition-group
- uuid
- recharts
- sass

## Import an icon

import { ReactComponent as IconName } from '@icons/filename.svg';

## API

methods:

- get
- getWithParams
- send
- downloadFile

api.{method}<"ResultType", "RequestType">(endpointName)

EXAMPLE

type ResultType {
result: string
}

type RequestType {
value: string
}

```ts
api.send<ResultType, RequestType>(endpointEnum.MetodistPersonalCard);
```

## Chart

Piechart

```jsx
<PieChart
  data={{
    chartData: data01,
    nameKey: 'name',
    dataKey: 'value',
  }}
/>
```

LinearChart

```jsx
<LinearChart
  data={{
    chartData: data01,
    nameKey: 'name',
    dataKeys: ['value', 'gv'],
  }}
/>
```

BarChart

```jsx
<BarChart
  data={{
    chartData: data01,
    nameKey: 'name',
    dataKeys: ['value', 'gv'],
  }}
/>
```

Sandbox - examples of using components
