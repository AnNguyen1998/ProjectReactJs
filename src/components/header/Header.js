import React, {useState} from 'react'
import {Col, Layout, Menu, Row, Dropdown} from 'antd'
import { AppstoreOutlined, SettingOutlined, HomeOutlined} from '@ant-design/icons'
import './header.css'
const items = [
  {
    label: 'Home',
    key: 'mail',
    icon: <HomeOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'Submenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];
export default function Header() {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Layout style={{padding:'50px 20px', position:'relative'}}>
        <div style={{width:"100%", height:"100%", background:"black", opacity:"0.5", position:"absolute", top:"0", left:"0"}}></div>
        <Row>
        <Col span={24}>
        <Menu style={{padding:'10px',background:'#d35400', zIndex:'1', width:'100%'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </Col>
        </Row>
    </Layout>
)
}
