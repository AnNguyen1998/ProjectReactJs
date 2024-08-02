import React, { useState } from 'react'
import { Col, Image, Layout, Menu, Row, Grid, Input } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import './header.css'
import Bird from '../../images/Bird.png'
export default function Header() {
  const {Search} = Input
  const { Header } = Layout
  const { SubMenu } = Menu
  const { useBreakpoint } = Grid
  const { md } = useBreakpoint()
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Header style={{ position: 'relative', height: '30%' }}>
      <div style={{ width: "100%", height: "100%", background: "black", opacity: "0.1", position: "absolute", top: "0", left: "0", backdropFilter: 'blur(20px)' }}></div>
      <Row>
        <Col span={24}>
          <Menu style={{ background: '#d35400', zIndex: '1', width: '100%' }}
            onClick={onClick} selectedKeys={[current]}
            mode="horizontal"
            overflowedIndicator={<MenuOutlined />}
          >
            <Menu.Item>
              <a href='#'><Image src={Bird} width={100}/></a>
            </Menu.Item>
            <Menu.Item key={'mail'}>
              Home
            </Menu.Item>
            <Menu.Item key="app">
              Navigation Two
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  Navigation Three - Submenu
                </span>
              }
              key={SubMenu}
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  )
}
