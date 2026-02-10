export default function Home() {
  return (
    <>
      <img
        src="/me.jpg"
        alt="James Dillon"
        style={{
          width: '100vw',
          height: 480,
          objectFit: 'cover',
          display: 'block',
          marginBottom: '1rem',
          borderRadius: 0,
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          maxWidth: 'none',
        }}
      />
      <div style={{ padding: '2rem', maxWidth: 800, margin: '0 auto', fontFamily: 'Roboto Mono, monospace', color: '#222', textAlign: 'left' }}>
        <h2 style={{ fontFamily: 'Roboto Mono, monospace', fontWeight: 700, fontSize: '2.1rem', letterSpacing: '-0.02em', marginBottom: '1.2rem', marginTop: 0, color: '#222', textAlign: 'left' }}>Welcome</h2>
        <p style={{ color: '#888', fontSize: 17, marginBottom: '2rem', textAlign: 'left' }}>
          Hi, I'm James Dillon. I designed and built this website myself using React, combining my interests in both software and physical design. Here you can explore my projects, learn about my background, and get in touch.
        </p>
        <h3 style={{ fontWeight: 700, fontSize: '1.15rem', margin: '2.2rem 0 0.7rem 0', color: '#222', textAlign: 'left' }}>Personal Statement</h3>
        <p style={{ fontSize: 16, margin: '0.7em 0 0 0', color: '#888', textAlign: 'left' }}>
          I am a motivated and curious student who enjoys learning, creating, and experimenting with new ideas—especially in design and technology. My favourite subject at school is Design and Technology, where I love bringing concepts to life, whether through 3D printing, electronics, or hands-on making. I also have a strong passion for software development, building web apps and tools that solve real problems or showcase my creativity.
        </p>
        <p style={{ fontSize: 16, margin: '0.7em 0 2.2em 0', color: '#888', textAlign: 'left' }}>
          Volunteering at different organizations has helped me develop strong teamwork and communication skills. I am keen to gain experience in a professional environment and plan to pursue an apprenticeship after my A Levels, where I can continue learning and developing my skills in both design and software. Outside of school and my projects, I enjoy running (5K PB: 20:35) and am always looking for new challenges.
        </p>
        <h3 style={{ fontWeight: 700, fontSize: '1.15rem', margin: '2.2rem 0 0.7rem 0', color: '#222', textAlign: 'left' }}>Explore the site</h3>
        <ul style={{ fontSize: 16, margin: '0.7em 0 0 0', paddingLeft: '1.2em', color: '#888', textAlign: 'left' }}>
          <li><strong>About</strong> – My education, experience, and qualifications.</li>
          <li><strong>Design</strong> – Physical and 3D-printed projects, including a Children's Piano.</li>
          <li><strong>Software</strong> – Software projects with live GitHub stats.</li>
          <li><strong>Contact</strong> – Get in touch with me directly.</li>
        </ul>
      </div>
    </>
  );
}
