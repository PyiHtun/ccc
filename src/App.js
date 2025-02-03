import logo from '././img/ccc_main.png';
import card1 from '././img/card-letUsHelp.webp';
import card2 from '././img/card-consultation.webp';
import card3 from '././img/card-careplan.webp';
import card4 from '././img/card-inGoodHand.webp';
import StepCard from '././component/StepCard'; // Adjust the import path as needed

import './App.css';
import React from 'react';
import { Layout, Menu, Space, Col, Row, Input, Divider } from 'antd';
import { MailTwoTone, PhoneTwoTone } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

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
const onSearch = (value, _e, info) => console.log(info?.source, value);

function App() {
  return (
    <Layout style={{ minHeight: '100vh', background: "#ffffff", }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          background: "#ffffff",
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
            marginTop: '10px', // Add spacing between logo and menu
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
          overflowedIndicator={
            <span style={{ fontSize: '40px' }}>...</span>
          }
        />
        <Space className="contact-info" style={{ marginLeft: '20px' }}>
          <PhoneTwoTone twoToneColor="#1890ff" />
          <span>01234567890</span>
          <MailTwoTone twoToneColor="#1890ff" />
          <span>info@cozycornercare.com</span>
        </Space>
      </Header>
      <Content style={{ background: "#ffffff", marginTop: '20px' }}>
        <div className="content-wrapper">
          <div className="card-container">
          <Row justify="center" style={{ marginTop: '20px' }}>
              <Col xs={24} sm={16} md={12} lg={8}>
                <Search
                  className="custom-search"
                  placeholder="Email or Contact Number"
                  allowClear
                  enterButton="Submit"
                  size="large"
                  onSearch={onSearch}
                />
              </Col>
          </Row> 
            <Divider/>
            <Row gutter={16} className="card-row">
              <Col span={6}>
                <StepCard 
                  step={1} 
                  title="Let's Connect" 
                  description="Leave your contact and we will takecare of the rest" 
                  imageSrc={card1}
                />
              </Col>
              <Col span={6}>
                <StepCard 
                  step={2} 
                  title="Free Consultation" 
                  description="Voice call or Video call or face to face meeting" 
                  imageSrc={card2}
                />
              </Col>
              <Col span={6}>
                <StepCard   
                  step={3} 
                  title="Review Care Plan" 
                  description="We will come up with free careplan based on our consultation sessions" 
                  imageSrc={card3}
                />
              </Col>
              <Col span={6}>
                <StepCard 
                  step={4} 
                  title="Care at Cozy Corner" 
                  description="Let's start our journey together for better times" 
                  imageSrc={card4}
                />
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        CCC Design ©{new Date().getFullYear()} Created by PH
      </Footer>
    </Layout>
  );
}

export default App;
