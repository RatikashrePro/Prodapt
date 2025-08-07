import { useNavigate } from 'react-router-dom';

// Pick a random quote at render time
const quotes = [
  "“When life gives you lemonade, make lemons. Life will be all like ‘Whaaat?!’” – Phil",
  "“I’m not a housewife. I’m a trophy wife.” – Gloria",
  "“I always felt bad for people with emotionally distant fathers. It turns out I’m one of them.” – Claire",
  "“I am brave. Roller coasters? Love them. Scary movies? I've seen Ghostbusters, like, seven times.” – Cam",
  "“We’re like a modern family… wait, that’s a great title.” – Jay"
];
const quote = quotes[Math.floor(Math.random() * quotes.length)];

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .home-container {
          text-align: center;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #fff 0%, #fbe9e7 100%);
          border-radius: 10px;
          max-width: 900px;
          margin: 2rem auto;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          font-family: 'Segoe UI', sans-serif;
        }

        .home-container h2 {
          color: #b22222;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .home-container p.subtitle {
          color: #555;
          font-style: italic;
          margin-bottom: 2rem;
        }

        .button-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .home-button {
          position: relative;
          padding: 0.75rem 1.5rem;
          border: 2px solid currentColor;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          background: transparent;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .home-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 300%;
          height: 300%;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          z-index: 0;
          transition: transform 0.4s ease;
        }

        .home-button:active::before {
          transform: translate(-50%, -50%) scale(1);
        }

        .home-button span {
          position: relative;
          z-index: 1;
        }

        .dashboard-btn {
          color: #007bff;
        }

        .gallery-btn {
          color: #28a745;
        }

        .contact-btn {
          color: #ffc107;
        }

        .login-btn {
          color: #17a2b8;
        }

        .signup-btn {
          color: #dc3545;
        }

        .home-button:hover {
          background-color: rgba(0, 0, 0, 0.03);
        }

        .quote-box {
          margin-top: 3rem;
          font-size: 1rem;
          color: #6c757d;
          font-style: italic;
          border-top: 1px dashed #ddd;
          padding-top: 1rem;
        }
      `}</style>

      <div className="home-container">
        <h2>Welcome to the Family</h2>
        <p className="subtitle">A peek inside our chaotic, hilarious, loving household.</p>
        <div className="button-group">
          <button className="home-button dashboard-btn" onClick={() => navigate('/dashboard')}><span>Family Dashboard</span></button>
          <button className="home-button gallery-btn" onClick={() => navigate('/gallery')}><span>Photo Gallery</span></button>
          <button className="home-button contact-btn" onClick={() => navigate('/contactus')}><span>Contact Us</span></button>
          <button className="home-button login-btn" onClick={() => navigate('/login')}><span>Login</span></button>
          <button className="home-button signup-btn" onClick={() => navigate('/signup')}><span>Join the Family</span></button>
        </div>

        <div className="quote-box">{quote}</div>
      </div>
    </>
  );
}

export default Home;
