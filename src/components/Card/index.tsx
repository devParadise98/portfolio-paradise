import React from 'react';
import { Col } from 'react-bootstrap';

interface Props {
  title: string;
  description: string;
  imgUrl: string;
}

const Card: React.FC<Props> = ({
  title,
  description,
  imgUrl
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default Card;