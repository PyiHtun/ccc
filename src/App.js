import logo from '././img/ccc_main.png';
import card1 from '././img/card-letUsHelp.webp';
import card2 from '././img/card-consultation.webp';
import card3 from '././img/card-careplan.webp';
import card4 from '././img/card-inGoodHand.webp';
import StepCard from '././component/StepCard'; // Adjust the import path as needed
import opening from '././img/opening2.webp'
import './App.css';
import React from 'react';
import { Layout, Menu, Space, Col, Row, Input, Divider, Typography,  Avatar, List, Steps } from 'antd';
import { MailTwoTone, PhoneTwoTone } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Title, Paragraph, Text, Link } = Typography;

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

  const data = [
    {
      title: 'Compassionate Care Led by Experienced NHS Nurses',
      current: 0,
      description: 'At the heart of our care agency is a team led by highly skilled and dedicated NHS nurses with extensive clinical and educational expertise. Our leadership includes Qualified Nurses, Practice Educators, Professional Nurse Advocates, NMC Board Memeber and OSCE Trainers, ensuring that every aspect of care we provide meets the highest professional standards.',
    },

  ];

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
      <Content style={{ background: "#ffffff", marginTop: '10px', borderTop: '1px solid #1BA1E2' }}>
        <div className="content-wrapper">
          <div>
            {/* <List 
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            /> */}
                  <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => {
          const isRightAligned = index % 2 !== 0; // Every other item is right-aligned

          return (
            <List.Item>
              <div
                style={{
                  display: "flex",
                  flexDirection: isRightAligned ? "row-reverse" : "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  textAlign: isRightAligned ? "right" : "left",
                }}
              >
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  style={{
                    marginLeft: isRightAligned ? "10px" : "0",
                    marginRight: isRightAligned ? "0" : "10px",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <List.Item.Meta
                    title={
                      <a href="https://ant.design" style={{ color: "#1677ff" }}>
                        {item.title}
                      </a>
                    }
                    description={item.description}
                  />
                </div>
              </div>
            </List.Item>
          );
        }}
      />
          </div>
          <div className="card-container" >
            <Row gutter={16} className="card-row">
              <Col span={6}>
                <StepCard 
                  step={1} 
                  title="Let's Connect" 
                  description="Leave your contact and we will reach out" 
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
            {/* <Row 
              style={{
                height: 200,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                position: 'relative', 
                overflow: 'hidden', // Prevents content from overflowing
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',  
                // backgroundPosition: 'center',
                // backgroundImage: `url(${opening})`,
                backgroundColor: '#FDFDEC'
              }}
            >
          
            </Row> */}
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
