
import { Carousel, Container } from 'react-bootstrap';

const pianoImages = [
  '/public/pianoA.jpg',
  '/public/pianoB.jpg',
  '/public/pianoC.jpg',
];

export default function Design() {
  return (
    <>
      <h2
        style={{
          fontFamily: 'Roboto Mono, monospace',
          fontWeight: 700,
          marginBottom: '1.2rem',
          marginTop: '4.5rem',
          fontSize: '2.1rem',
          letterSpacing: '-0.02em',
          textAlign: 'center',
        }}
      >
        Designs
      </h2>
      <div style={{ width: 800, maxWidth: '100%', height: 480, margin: '0 auto', overflow: 'hidden' }}>
        <Carousel style={{ width: '100%', height: '100%' }}>
          {pianoImages.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={img}
                alt={`Children's Piano ${idx + 1}`}
                style={{ width: '100%', height: 480, objectFit: 'cover' }}
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
