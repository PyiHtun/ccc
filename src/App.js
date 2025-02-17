import React, { useState } from 'react';
import logo from '././img/ccc_main_2.png';
import card1 from '././img/card-letUsHelp.webp';
import card2 from '././img/card-consultation.webp';
import card3 from '././img/card-careplan.webp';
import card4 from '././img/card-inGoodHand.webp';
import carousel1 from '././img/carousel-1.webp';
import carousel2 from '././img/carousel-2.webp';
import carousel3 from '././img/carousel-3.webp';
import carousel5 from '././img/carousel-5.webp';

import StepCard from '././component/StepCard'; // Adjust the import path as needed
import './App.css';
import { 
  message, 
  Alert, 
  Layout, 
  Menu, 
  Space, 
  Col, 
  Row, 
  Input, 
  Divider, 
  Typography,  
  Avatar, 
  List, 
  Steps, 
  Carousel, 
  FloatButton,
  Drawer
} from 'antd';
import { 
  MailTwoTone, 
  PhoneTwoTone, 
  SendOutlined, 
  PhoneFilled, 
  MailFilled, 
  HeartFilled 
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Title, Paragraph, Text, Link } = Typography;

// These constants don't use hooks so they can remain here.
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

const data = [
  {
    title: 'Led by Nurses, Inspired by Compassion',
    current: 0,
    description: 'At the heart of our care agency is a leadership team led by highly skilled and dedicated NHS professionals with extensive clinical and educational expertise. Their qualifications include roles as Qualified Nurses, Practice Educators, Professional Nurse Advocates, OSCE Trainers, and an NMC Board Member, ensuring that every aspect of care we provide meets the highest professional standards.',
  },
  {
    title: 'Let Us Take Care of You or Your Loved One',
    current: 0,
    description: 'Choosing the right care provider is an important decision, and we are here to support you every step of the way. Whether you or a loved one require compassionate personal care, specialist dementia support, or assistance with disabilities, our team is ready to provide expert care tailored to your needs.',
  },
];

const contentStyle = {
  margin: 0,
  height: '500px',
  color: '#fff',
  lineHeight: '22px',
  textAlign: 'top',
  background: '#364d79',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.9,
  position: 'relative',
};

const FloatButtonWrapper = () => (
  <FloatButton.Group
    shape="circle"
    size="large"
    style={{
      position: 'fixed',  
      bottom: 20,
      right: 20,
      zIndex: 9999,
      border: 40,
    }}
  >
    <FloatButton 
      icon={<PhoneFilled style={{ fontSize: 20 }} />} 
      onClick={() => window.location.href = 'tel:01234567890'} 
      style={{
        backgroundColor: '#015BBB',
        color: '#ffffff',
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
    <FloatButton 
      icon={<MailFilled />} 
      style={{
        backgroundColor: '#015BBB', 
        color: '#ffffff',
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  </FloatButton.Group>
);

function App() {
  // Moved hook calls inside the component
  const [searchValue, setSearchValue] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const showMessage = () => {
    message.success('Success!');
  };

  const handleSearch = (value) => {
    showMessage();
    setSearchValue(''); // Clear the search box.
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleCardClick = (step) => {
    message.success(`Card ${step} clicked`);
    // Trigger further actions here, e.g., navigate, open a modal, etc.
  };


  const showDrawer = (card) => {
    setSelectedCard(card);
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };
  
  return (
    <Layout style={{ minHeight: '100vh', background: "#ffffff" }}>
      <Header
        className="contact-info-mobile"
        style={{
          alignItems: 'center',
          padding: '0 10px',
          background: "#ffffff",
        }}
      >
        <Space>
          <PhoneTwoTone twoToneColor="#015BBB" />
          <span>01234567890</span>
          <MailTwoTone twoToneColor="#015BBB" />
          <span>info@cozycornercare.com</span>
        </Space>
      </Header>
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
            objectFit: 'contain',
            marginLeft: '20px',
            marginRight: '20px',
            marginTop: '10px',
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
            <span style={{ fontSize: '40px', lineHeight: '1px' }}>...</span>
          }
        />
        <Space className="contact-info">
          <PhoneTwoTone twoToneColor="#015BBB" />
          <span>01234567890</span>
          <MailTwoTone twoToneColor="#015BBB" />
          <span>info@cozycornercare.com</span>
        </Space>
      </Header>
      <Content style={{ background: "#ffffff", marginTop: '10px' }}>
        <div>
          <Carousel arrows infinite={false} lazyLoad={false} forceRender={true}>
            <div>
              <div
                className="carousel-content"
                style={{ backgroundImage: `url(${carousel1})` }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '6%',
                    left: '2%',
                    width: '80%',
                    textAlign: 'left',
                    color: '#000066',
                    padding: '10px',
                    fontWeight: 'bold',
                  }}
                >
                  At the heart of our care agency is a leadership team led by highly skilled and dedicated NHS professionals with extensive clinical and educational expertise.
                </div>
              </div>
            </div>
            <div>
              <div
                className="carousel-content"
                style={{ backgroundImage: `url(${carousel2})`, position: 'relative' }}
              >
              </div>
            </div>
            <div>
              <div
                className="carousel-content"
                style={{ backgroundImage: `url(${carousel3})`, position: 'relative' }}
              >
              </div>
            </div>
            <div>
              <div
                className="carousel-content"
                style={{ backgroundImage: `url(${carousel5})`, position: 'relative' }}
              >
              </div>
            </div>
          </Carousel>
          <FloatButtonWrapper />
        </div>
        <Row justify="center" align="center">
          <Col xs={24} sm={24} md={12} lg={12} style={{ textAlign: 'center' }}>
            <Alert
              message="Leave your contact number or email, and we'll be in touch soon.."
              description={
                <Search
                  className="custom-search"
                  placeholder="Contact Number or Email"
                  allowClear
                  enterButton={<HeartFilled />}
                  size="large"
                  style={{ width: '100%' }}
                  value={searchValue}
                  onChange={handleChange}
                  onSearch={handleSearch}
                />
              }
              type="success"
              style={{ marginTop: '20px', textAlign: 'center' }}
            />
          </Col>
        </Row>
        <Row justify="center">
          <div className="custom-search-container"></div>
        </Row>
        <div className="content-wrapper">
          <div className="card-container">
          <Row gutter={16} className="card-row">
        <Col span={6}>
          <StepCard 
            step={1} 
            title="Let's Connect" 
            description="Leave your contact and we will reach out" 
            imageSrc={card1} 
            onClick={() => showDrawer({
              title: "Let's Connect",
              image: card1,
              description: "Leave your contact and we will reach out",
            })}
          />
        </Col>
        <Col span={6}>
          <StepCard 
            step={2} 
            title="Free Consultation" 
            description="Voice call or Video call or face to face meeting" 
            imageSrc={card2} 
            onClick={() => showDrawer({
              title: "Free Consultation",
              image: card2,
              description: "Voice call or Video call or face to face meeting",
            })}
          />
        </Col>
        <Col span={6}>
          <StepCard 
            step={3} 
            title="Review Care Plan" 
            description="We will come up with a free care plan based on our consultation sessions" 
            imageSrc={card3} 
            onClick={() => showDrawer({
              title: "Review Care Plan",
              image: card3,
              description: "We will come up with a free care plan based on our consultation sessions",
            })}
          />
        </Col>
        <Col span={6}>
          <StepCard 
            step={4} 
            title="Care at Cozy Corner" 
            description="Let's start our journey together for better times" 
            imageSrc={card4} 
            onClick={() => showDrawer({
              title: "Care at Cozy Corner",
              image: card4,
              description: "Let's start our journey together for better times",
            })}
          />
        </Col>
      </Row>
            <Drawer 
              title={selectedCard ? selectedCard.title : "Card Details"} 
              onClose={onClose} 
              open={drawerOpen}
            >
              {selectedCard && (
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <img 
                    src={selectedCard.image} 
                    alt={selectedCard.title} 
                    style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                  />
                </div>
              )}
              <p>{selectedCard ? selectedCard.description : "Some contents..."}</p>
            </Drawer>
          </div>
          <div>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                      style={{ marginLeft:"10px" }}
                    />
                    <div style={{ flex: 1, textAlign: "left" }}>
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
              )}
            />
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
