import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useGitHubRepoStats } from './useGitHubRepoStats';

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

export default function ProjectCard({ owner, repo, cardStyle }) {
  const stats = useGitHubRepoStats(owner, repo);
  return (
    <Card style={{ width: '22rem', minWidth: 300, ...cardStyle, fontFamily: 'Roboto Mono, monospace' }}>
      <Card.Body className="d-flex flex-column" style={{ height: '100%' }}>
        {stats.loading ? (
          <>
            <Card.Title>Loading...</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">&nbsp;</Card.Subtitle>
            <Card.Text style={{ opacity: 0.7 }}>Loading project info...</Card.Text>
          </>
        ) : stats.error ? (
          <>
            <Card.Title>Error</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">&nbsp;</Card.Subtitle>
            <Card.Text style={{ color: 'salmon' }}>{stats.error}</Card.Text>
          </>
        ) : (
          <>
            <Card.Title>{stats.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{stats.language}</Card.Subtitle>
            <Card.Text style={{ opacity: 0.7 }}>{stats.description}</Card.Text>
          </>
        )}
        <Button as="a" href={stats.html_url || `https://github.com/${owner}/${repo}`} variant="dark" target="_blank" rel="noopener noreferrer" style={{ marginBottom: 8 }}>Visit</Button>
        <div style={{
          background: '#f5f5f5',
          borderRadius: 8,
          padding: '0.7rem 0.7rem 0.5rem 0.7rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '0.7rem',
          marginTop: '1.5rem',
          minHeight: 40,
          fontFamily: 'Roboto Mono, monospace',
          boxShadow: 'none',
        }}>
          {stats.loading ? (
            <span style={{ color: '#fff', opacity: 0.7 }}>Loading stats...</span>
          ) : stats.error ? (
            <span style={{ color: 'salmon' }}>Error: {stats.error}</span>
          ) : (
            <>
              <StatBox icon="★" label="Stars" value={stats.stars} />
              <StatBox icon="⑂" label="Forks" value={stats.forks} />
              <StatBox icon="⌛" label="Last commit" value={stats.lastCommit ? new Date(stats.lastCommit).toLocaleDateString() : ''} />
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
