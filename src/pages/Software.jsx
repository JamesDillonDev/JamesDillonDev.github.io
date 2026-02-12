
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../helpers/ProjectCard.jsx';

// Displays a stat in a styled box
function StatBox({ icon, label, value }) {
  return (
    <div style={{
      color: '#222',
      background: '#eaeaea',
      borderRadius: 6,
      padding: '0.3rem 0.8rem',
      minWidth: 70,
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 500,
      fontFamily: 'Roboto Mono, monospace',
      border: '1px solid #bbb',
      boxShadow: 'none',
      marginBottom: 0
    }}>
      <span style={{ marginRight: 6 }}>{icon}</span>
      {label && <span style={{ opacity: 0.7, fontSize: 13 }}>{label}: </span>}
      <span>{value}</span>
    </div>
  );
}

export default function Software() {
  return (
    <Container fluid style={{ paddingTop: 30, paddingLeft: 0, paddingRight: 0, paddingBottom: '2rem' }}>
      <h2 style={{ marginTop: '0.5rem', marginBottom: '2rem', fontFamily: 'Roboto Mono, monospace', fontWeight: 700, paddingTop: 10 }}>Software Projects</h2>
      <Row className="g-4" xs={1} sm={1} md={2} lg={3} xl={3} style={{ justifyContent: 'center' }}>
      <Col style={{ display: 'flex', justifyContent: 'center' }}>
        <ProjectCard
        owner="JamesDillonDev"
        repo="gradicode"
        cardStyle={{
          background: '#eaf0fa',
          border: '1.5px solid #7da7d9',
          fontFamily: 'Roboto Mono, monospace'
        }}
        />
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'center' }}>
        <ProjectCard
        owner="JamesDillonDev"
        repo="tanker"
        cardStyle={{
          background: '#faeaea',
          border: '1.5px solid #d97d7d',
          fontFamily: 'Roboto Mono, monospace'
        }}
        />
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'center' }}>
        <ProjectCard
        owner="JamesDillonDev"
        repo="JamesDillonDev.github.io"
        cardStyle={{
          background: '#eafae9',
          border: '1.5px solid #7dd97d',
          fontFamily: 'Roboto Mono, monospace'
        }}
        />
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'center' }}>
        <ProjectCard
        owner="JamesDillonDev"
        repo="TCP-Chat"
        cardStyle={{
          background: '#f0eafa',
          border: '1.5px solid #a77dd9',
          fontFamily: 'Roboto Mono, monospace'
        }}
        />
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'center' }}>
        <ProjectCard
        owner="JamesDillonDev"
        repo="Minejourney"
        cardStyle={{
          background: '#fafae9',
          border: '1.5px solid #d9d97d',
          fontFamily: 'Roboto Mono, monospace'
        }}
        />
      </Col>
      </Row>
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
      <h4 style={{ fontWeight: 700, marginBottom: 12, fontFamily: 'Roboto Mono, monospace' }}>My GitHub Contribution Graph</h4>
      <img src="https://ghchart.rshah.org/JamesDillonDev" alt="GitHub Contribution Graph" style={{ width: '100%', maxWidth: 700, background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }} />
      </div>
    </Container>
  );
}
