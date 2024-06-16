import { FileOutlined } from '@ant-design/icons';
import { Flex, Space, Typography } from 'antd';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';
import { ReactComponent as FileIcon } from '@icons/file-icon.svg';
import { useEffect, useState } from 'react';
import { ShipTableType, endpointEnum } from '@src/api/myApi/api.types';
import { api } from '@src/api/myApi/api';

const Schedule = () => {
  const [tableData, setTableData] = useState<ShipTableType[] | null>(null);

  useEffect(() => {
    api
      .get<ShipTableType[]>(endpointEnum.list_ships)
      .then((data) => setTableData(data));
  }, []);

  const taskApi: Task[] = tableData
    ? tableData?.map((item) => ({
        start: new Date(item.start_date),
        end: new Date(item.finish_time_plan),
        name: item.ship_name,
        id: 'Task 1',
        type: 'task',
        progress: 45,
        dependencies: ['Task 2'],
        isDisabled: true,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
      }))
    : [];

  return (
    <div>
      <Flex justify="space-between" align="center">
        <Typography.Title level={2}>Расписание</Typography.Title>
        <Space direction="horizontal">
          <FileIcon />
          <Typography.Link>Скачать расписание</Typography.Link>
        </Space>
      </Flex>

      {taskApi && <Gantt tasks={taskApi} locale="rus" viewMode={ViewMode.Day} />}
    </div>
  );
};

export default Schedule;
