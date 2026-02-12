
import { Carousel, Container } from 'react-bootstrap';

const pianoImages = [
  '/pianoA.jpg',
  '/pianoB.jpg',
  '/pianoC.jpg',
];

export default function Design() {
  return (
    <>
      <h2
        style={{
          fontFamily: 'Roboto Mono, monospace',
          fontWeight: 700,
          marginBottom: '1.2rem',
          marginTop: '7.5rem',
          fontSize: '2.1rem',
          letterSpacing: '-0.02em',
          textAlign: 'center',
          paddingTop: 5,
        }}
      >
        Designs
      </h2>
      <div style={{ width: '90vw', maxWidth: 800, height: '56vw', maxHeight: 480, marginLeft: 'auto', marginRight: 'auto', overflow: 'hidden', paddingTop: 32 }}>
        <Carousel style={{ width: '100%', height: '100%' }}>
          {pianoImages.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={img}
                alt={`Children's Piano ${idx + 1}`}
                style={{ width: '100%', height: '56vw', maxHeight: 480, objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h4>Children's Piano</h4>
                <p>
                  A fun, interactive piano designed for children, featuring colorful keys and simple controls to encourage musical exploration.
                  It has four different modes so a child can experience more than just music.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}
