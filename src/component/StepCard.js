import React from 'react';
import { Card, Badge } from 'antd';
const { Meta } = Card;

const StepCard = ({ step, title, description, imageSrc, onClick }) => (
  <Badge count={step} style={{ backgroundColor: '#015BBB' }}>
    <Card
      hoverable
      style={{ width: 240, height: 380 }}
      onClick={onClick}
      cover={<img alt={title} src={imageSrc} />}
    >
      <Meta title={title} description={description} />
    </Card>
  </Badge>
);

export default StepCard;