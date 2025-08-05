import React from 'react';

function Fixedblock() {
  const containerStyle = {
    position: 'fixed',
    bottom: '1.5rem',
    right: '1.5rem',
    zIndex: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const messageStyle = {
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#000',
    padding: '0.4rem 1.2rem',
    borderRadius: '9999px',
    fontSize: '0.9rem',
    fontWeight: '500',
    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
    animation: 'floatText 3s ease-in-out infinite',
    whiteSpace: 'nowrap',
    border: '1px solid rgba(255,255,255,0.3)',
  };

  const linkStyle = {
    display: 'block',
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease',
    animation: 'floatIcon 2s ease-in-out infinite',
    backgroundColor: 'white',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  return (
    <>
      <style>{`
        @keyframes floatIcon {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }

        @keyframes floatText {
          0% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
          100% { transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .floating-wtp {
            bottom: 1rem !important;
            right: 1rem !important;
          }

          .floating-wtp a {
            width: 3.5rem !important;
            height: 3.5rem !important;
          }

          .floating-wtp span {
            font-size: 0.8rem !important;
            padding: 0.4rem 0.8rem !important;
          }
        }
      `}</style>

      <div style={containerStyle} className="floating-wtp">
        <span style={messageStyle}>Hi, let’s talk!</span>
        <a
          href="https://wa.me/9048644333"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src="/wtp.png"
            alt="WhatsApp"
            style={imageStyle}
          />
        </a>
      </div>
    </>
  );
}

export default Fixedblock;
