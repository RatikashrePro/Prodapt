import { useEffect, useState } from 'react';

function Footer() {
  const quotes = [
    "“I’m cool dad. That’s my thing.” – Phil",
    "“Ay, Dios mío.” – Gloria",
    "“Make good choices!” – Claire",
    "“I am freakishly strong.” – Cam",
    "“It’s not easy being the patriarch.” – Jay"
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % quotes.length);
    }, 5000); // rotates quote every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(to right, #1c1c1c, #2c2c2c);
          color: #f5f5f5;
          text-align: center;
          padding: 1.8rem 1rem;
          font-family: 'Segoe UI', sans-serif;
          font-size: 0.95rem;
          position: relative;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
        }

        .footer-title {
          font-weight: bold;
          color: #f44336;
          font-size: 1.2rem;
          margin-bottom: 0.4rem;
          letter-spacing: 0.5px;
        }

        .footer-quote {
          color: #ccc;
          font-style: italic;
          margin-top: 0.8rem;
          transition: opacity 0.6s ease-in-out;
          min-height: 1.5em;
        }

        .footer-note {
          font-size: 0.75rem;
          color: #888;
          margin-top: 1rem;
        }

        .footer-heart {
          color: #e91e63;
        }
      `}</style>

      <footer className="footer">
        <div className="footer-title">Modern Family Fan App</div>
        <div>© 2025 — Built with React & <span className="footer-heart">♥</span></div>
        <div className="footer-quote">{quotes[quoteIndex]}</div>
        <div className="footer-note">Filmed in front of a live studio audience* (*not really)</div>
      </footer>
    </>
  );
}

export default Footer;
