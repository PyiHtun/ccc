import logo from '././img/ccc_main.png';
import './App.css';
import React from 'react';
import { Layout, Menu, Space, theme, Carousel } from 'antd';
import { MailTwoTone, PhoneTwoTone } from '@ant-design/icons'; // Import icons

const { Header, Content, Footer } = Layout;

const MENU_LABELS = {
  HOME: "Home",
  SERVICES: "Our Services",
  ABOUT: "About Us",
  WORK: "Work With Us",
  CONTACT: "Contact Us",
};

const menuItems = Object.values(MENU_LABELS).map((label, index) => ({
  key: index + 1,
  label,
}));

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function App() {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          background: "#ffffff",
          // borderBottom: '1px solid #041528'
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            height: '20em', 
            width: '18em', 
            objectFit: 'contain', // Ensure it doesn't stretch
            marginRight: '10px', // Add spacing between logo and menu
          }}
        />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={menuItems}
          style={{
            flex: 1,
            minWidth: '40px',  
            borderBottom: '0px',
          }}
        />
        <Space className="contact-info" style={{ marginLeft: '20px' }}>
          <PhoneTwoTone twoToneColor="#1890ff" />
          <span>01234567890</span>
          <MailTwoTone twoToneColor="#1890ff" />
          <span>info@cozycornercare.com</span>
        </Space>
      </Header>
      <Content
        style={{  
          padding: '0 0',
          background: "#ffffff",
        }}
        >
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
        CCC Design ©{new Date().getFullYear()} Created by PH
      </Footer>
    </Layout>
  );
}

export default App;
