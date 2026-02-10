export default function About() {
  return (
    <div
      style={{
        padding: '5rem 2rem 2rem 2rem',
        maxWidth: 800,
        margin: '0 auto',
        fontFamily: 'Roboto Mono, monospace',
        textAlign: 'left',
        color: '#222',
      }}
    >
      <h2 style={{ fontFamily: 'Roboto Mono, monospace', fontWeight: 700, marginBottom: '1.2rem', marginTop: 0, fontSize: '2.1rem', letterSpacing: '-0.02em' }}>About</h2>

      {/* Education Section */}
      <section style={{ marginBottom: '2.2rem' }}>
        <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 8 }}>Education</h3>
        <div style={{ fontWeight: 400, color: '#888', marginBottom: 18, marginTop: -6, fontSize: 15 }}>
          I am a student at Knights Templar School Sixth Form (2020–present), currently taking four A-Levels (Maths, Computer Science, Physics, and Product Design) and an Extended Project Qualification. Below are my GCSE results:
        </div>
        <div style={{ overflowX: 'auto', maxWidth: 700 }}>
          <table className="table table-bordered table-striped" style={{ width: '100%', marginTop: '0.7rem', fontFamily: 'Roboto Mono, monospace', fontSize: 15 }}>
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
        </div>
      </section>

      {/* Experience Section */}
      <section style={{ marginBottom: '2.2rem' }}>
        <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 8 }}>Experience</h3>
        <div style={{ fontWeight: 600, marginBottom: 2, fontSize: 15 }}>Janus Technology – Junior Software Engineer (July 2025 – Aug 2025)</div>
        <div style={{ marginBottom: 8, fontSize: 15, color: '#666' }}>
          Designed and implemented an automated support system that worked out a customer’s issue and guided them through a step-by-step guide on how to resolve it.
        </div>
      </section>

      {/* Out of School Section */}
      <section style={{ marginBottom: '2.2rem' }}>
        <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 8 }}>Out of School</h3>
        <div style={{ fontWeight: 600, marginBottom: 2, fontSize: 15 }}>Royal Air Force Air Cadets (2022 to present)</div>
        <div style={{ marginBottom: 8, color: '#888', fontWeight: 400, fontSize: 15 }}>
          Completed instruction qualifications and regularly teach junior cadets during parade nights. Achieved Silver First Aid, advanced through the ranks, and represented the squadron at public events such as Remembrance Sunday. I have also represented the squadron in athletic events at both Wing and Regional level, achieving Gold at Wing.
        </div>
        <div style={{ fontWeight: 600, marginBottom: 2, fontSize: 15 }}>Scouting (2014 to present)</div>
        <div style={{ marginBottom: 8, color: '#888', fontWeight: 400, fontSize: 15 }}>
          Progressed through Beavers, Cubs, Scouts, and now Explorers, doing activities such as cooking, pioneering, and more. I volunteer at my former Scout group, supporting fundraising events like running the BBQ at Balstock and the Baldock Beer Festival, and help run weekend camps.
        </div>
      </section>

      {/* Other Qualifications Section */}
      <section style={{ marginBottom: '2.2rem' }}>
        <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 8 }}>Other Qualifications</h3>
        <ul style={{ marginLeft: 0, paddingLeft: '1.2em', fontSize: 15, color: '#444' }}>
          <li><strong>BTEC Level 2 in Teamwork and Personal Development</strong> – Achieved through cadets, linking many badges and activities into an actual GCSE, plus an extra piece of outside coursework.</li>
          <li><strong>Fire Warden Training (valid until 2027)</strong> – Completed at Janus; workspace level, allows me to do fire marshalling if required.</li>
          <li><strong>Duke of Edinburgh’s Award</strong> – Completed Bronze, currently working towards Silver, and plan to achieve Gold.</li>
        </ul>
      </section>
    </div>
  );
}
