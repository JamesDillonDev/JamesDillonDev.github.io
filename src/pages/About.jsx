export default function About() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>About</h2>
      <p>This is the About page. Here you can add information about yourself or your site.</p>
      <h3 style={{ marginTop: '2rem' }}>GCSE Results</h3>
      <div style={{ overflowX: 'auto', maxWidth: 700 }}>
        <table className="table table-bordered table-striped" style={{ width: '100%', marginTop: '1rem', fontFamily: 'Roboto Mono, monospace' }}>
          <thead className="table-dark">
            <tr>
              <th>Subject</th>
              <th>Grade</th>
              <th>Old Grade Equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Maths</td><td>7</td><td>A</td></tr>
            <tr><td>English</td><td>5</td><td>C</td></tr>
            <tr><td>Physics</td><td>8</td><td>A</td></tr>
            <tr><td>Chemistry</td><td>7</td><td>A</td></tr>
            <tr><td>Biology</td><td>6</td><td>B</td></tr>
            <tr><td>Design and Technology</td><td>9</td><td>A*</td></tr>
            <tr><td>Computer Science</td><td>9</td><td>A*</td></tr>
            <tr><td>Media</td><td>8</td><td>A</td></tr>
            <tr><td>Enterprise and Marketing</td><td>M2</td><td>A</td></tr>
          </tbody>
        </table>
        <div style={{ fontSize: '0.95rem', marginTop: '0.5rem', color: '#555' }}>
          <strong>School:</strong> Knights Templar School (2020 to 2025)
        </div>
      </div>
    </div>
  );
}
