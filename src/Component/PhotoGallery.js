import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ImageGrid = ({ images }) => {
  return (
    <Container>
      <Row>
        {images.map((image) => (
          <Col key={image.id} sm={6} md={4} lg={3}>
            <div className="image-card">
              <img src={image.thumbnailUrl} alt={image.title} />
              <div className="image-title">{image.title}</div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageGrid;
