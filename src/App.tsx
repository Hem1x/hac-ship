import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { UrlEnum } from './App.types';
import { Layout, message } from 'antd';
import AsideMenu from './shared/AsideMenu/AsideMenu';
import React, { lazy } from 'react';
import { MessageInstance } from 'antd/es/message/interface';
import CreateOrder from './pages/CreateOrder/CreateOrder';
import Analytics from './pages/Analytics/Analytics';
import ChangeForm from './pages/ChangeForm/ChangeForm';
import CmpMap from './pages/CmpMap/CmpMap';
import ListProvodka from './pages/ListProvodka/ListProvodka';
import Schedule from './pages/Schedule/Schedule';
import TableProvodka from './pages/TableProvodka/TableProvodka';
const { Content } = Layout;

export const ModuleContext = React.createContext<MessageInstance>(
  {} as MessageInstance,
);

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <main>
      {contextHolder}
      <ModuleContext.Provider value={messageApi}>
        <Layout>
          <AsideMenu defaultPageUrl={UrlEnum.page1} />
          <Layout>
            <Content
              className="content"
              id="content"
              style={{ overflowY: 'scroll' }}>
              <Routes>
                <Route path={UrlEnum.analytics} element={<Analytics />} />
                <Route path={UrlEnum.changeForm} element={<ChangeForm />} />
                <Route path={UrlEnum.cpmMap} element={<CmpMap />} />
                <Route path={UrlEnum.createOrder} element={<CreateOrder />} />
                <Route path={UrlEnum.listProvodka} element={<ListProvodka />} />
                <Route path={UrlEnum.schedule} element={<Schedule />} />
                <Route path={UrlEnum.tableProvodka} element={<TableProvodka />} />
                <Route path={'/*'} element={<Analytics />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </ModuleContext.Provider>
    </main>
  );
};

export default App;
