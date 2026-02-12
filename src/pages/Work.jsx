import React from "react";

// TODO: Replace with actual work experience content from About
const Work = () => {
return (
    <div className="work-page" style={{ padding: '5rem 2rem 2rem 2rem', maxWidth: 1200, margin: '0 auto', fontFamily: 'Roboto Mono, monospace', textAlign: 'left', color: '#222' }}>
        <h1 style={{ fontFamily: 'Roboto Mono, monospace', fontWeight: 700, marginBottom: '1.2rem', marginTop: 0, fontSize: '2.1rem', letterSpacing: '-0.02em' }}>Work Experience</h1>
        
        <section style={{ marginBottom: '2.2rem', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginBottom: 8, position: 'relative' }}>
                <img src="https://janustechnology.co.uk/wp-content/uploads/2023/07/Janus-Logo.png" alt="Janus Technology logo" style={{ width: 54, height: 54, objectFit: 'contain', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }} />
                <div>
                    <h2 style={{ fontWeight: 800, fontSize: '1.7rem', color: '#1a237e', margin: 0 }}>Janus Technology</h2>
                    <div style={{ fontWeight: 600, fontSize: '1.1rem', color: '#333', lineHeight: 1.5 }}>
                        Junior Software Engineer &nbsp;|&nbsp; July 2025 – Aug 2025
                    </div>
                </div>
                <a href="https://janustechnology.co.uk" target="_blank" rel="noopener noreferrer"
                   style={{
                       position: 'absolute',
                       right: 0,
                       top: 0,
                       background: '#1a237e',
                       color: '#fff',
                       fontWeight: 700,
                       fontSize: 15,
                       padding: '7px 18px',
                       borderRadius: 6,
                       textDecoration: 'none',
                       boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                       transition: 'background 0.2s',
                       marginLeft: 16
                   }}
                   onMouseOver={e => e.currentTarget.style.background = '#3949ab'}
                   onMouseOut={e => e.currentTarget.style.background = '#1a237e'}
                >
                  Visit Site
                </a>
            </div>
            <div style={{ marginBottom: 8, fontSize: 15, color: '#444', marginLeft: 2 }}>
                During my time at Janus Technology, I worked on a range of projects, including automation and AI-driven support solutions:
            </div>
        </section>

        {/* Support Ticket Automation Plugin - osTicket */}
        <section style={{ marginBottom: '2.2rem' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 8 }}>Support Ticket Automation Plugin - osTicket</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 8 }}>
                <div style={{ fontSize: 15, color: '#444', flex: 1 }}>
                    I developed a plugin for the open-source <a href="https://osticket.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1a237e', textDecoration: 'underline' }}>osTicket</a> platform that uses AI to automatically generate support responses. This system analyzes incoming support tickets, determines the likely issue, and crafts a step-by-step response to help customers resolve their problems quickly and efficiently. The plugin leverages natural language processing to understand queries and provide relevant, actionable solutions, reducing the workload for human support agents and improving response times.
                </div>
                <img src="https://osticket.com/wp-content/uploads/2021/03/osticket-supsys-new-1-e1616621912452.png" alt="osTicket logo" style={{ width: 220, minWidth: 120, maxWidth: '30vw', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', marginBottom: 8, flexShrink: 0 }} />
            </div>
        </section>

        {/* Stile App for AVPro Edge */}
        <section style={{ marginBottom: '2.2rem' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 8 }}>Stile App – AVProEdge</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                <img
                    src="https://cdn.shopify.com/s/files/1/0712/9409/1574/files/Phone_with_Tablet_-_Landscape_Home_-_2x2_fb41be4b-2670-48a2-8fed-b6e4f70d0848.png?v=1741752714"
                    alt="Stile App on iPad controlling AVPro Edge multiviewer"
                    style={{ width: 320, minWidth: 200, maxWidth: '60vw', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', marginBottom: 8, flexShrink: 0 }}
                />
                    <div style={{ fontSize: 15, color: '#444', marginBottom: 8, flex: 1 }}>
                        I contributed to the development of the Stile app for <a href="https://www.avproglobal.com/pages/stile-app-avpro" target="_blank" rel="noopener noreferrer" style={{ color: '#1a237e', textDecoration: 'underline' }}>AVProEdge</a>, a powerful drag-and-drop control application for managing multiview video sources across multiple displays. My main responsibility was implementing the live video preview feature for all draggable sources, allowing users to see real-time previews of each input before assigning them to a display. This enhancement made it much easier for users to identify and select the correct source, improving the overall usability and experience of the app.
                    </div>
            </div>
        </section>
    </div>
);
};

export default Work;
