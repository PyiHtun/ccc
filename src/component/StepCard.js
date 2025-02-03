import React from 'react';
import { Card, Badge } from 'antd';
const { Meta } = Card;

function StepCard({ step, title, description, imageSrc }) {
  return (
    <Badge count={step} style={{ backgroundColor: '#015BBB' }}>
      <Card
        hoverable
        style={{ width: 240, height: 380, }}
        cover={<img alt={title} src={imageSrc} />}
      >
        <Meta title={title} description={description} />
      </Card>
    </Badge>
  );
}

export default StepCard;