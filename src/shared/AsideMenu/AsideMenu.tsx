import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ReactComponent as AdminIcon } from '@icons/admin.svg';
import { ReactComponent as MetodistIcon } from '@icons/metodist.svg';
import s from './AsideMenu.module.scss';
import classNames from 'classnames/bind';
import Logo from '/logo.png';
import LogoCollapsed from '/logoCollapsed.png';
import { UrlEnum } from '@src/App.types';

const { Sider } = Layout;
const cn = classNames.bind(s);

interface AsideMenuProps {
  defaultPageUrl: UrlEnum;
}

const AsideMenu = ({ defaultPageUrl }: AsideMenuProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const currentPage = pathname === '/' ? defaultPageUrl : pathname;
  const menuItems = [
    {
      key: UrlEnum.cpmMap,
      label: 'Карта СМП',
    },
    {
      key: UrlEnum.schedule,
      label: 'Расписание',
    },
    {
      key: UrlEnum.createOrder,
      label: 'Создать заявку',
    },
    {
      key: UrlEnum.listProvodka,
      label: 'Список проводок',
    },
    {
      key: UrlEnum.tableProvodka,
      label: 'Таблица проводок',
    },
    {
      key: UrlEnum.analytics,
      label: 'Аналитика',
    },
    {
      key: UrlEnum.changeForm,
      label: 'Внести изменения',
    },
  ];

  return (
    <Sider
      width={290}
      theme="light"
      className={cn('nav-panel')}
      trigger={null}
      collapsible
      collapsed={collapsed}>
      {collapsed ? (
        <img
          className={cn('nav-panel__logo-collapsed')}
          src={LogoCollapsed}
          alt="logo"
        />
      ) : (
        <img className={cn('nav-panel__logo')} src={Logo} alt="logo" />
      )}
      <Menu
        className={cn('nav-panel__menu')}
        selectedKeys={[currentPage]}
        items={menuItems}
        onClick={(e) => navigate(e.key)}
      />
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className={cn('nav-panel__collapse-button')}
        style={{
          right: collapsed ? '30%' : '50%',
        }}
      />
    </Sider>
  );
};

export default AsideMenu;
