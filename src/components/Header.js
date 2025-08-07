import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <style>{`
        .navbar {
          background-color: #1c1c1c;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Segoe UI', sans-serif;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          flex-wrap: wrap;
        }

        .navbar-title {
          font-size: 1.6rem;
          font-weight: bold;
          color: #f44336;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .navbar-title span {
          font-size: 1.2rem;
          color: #ddd;
          font-weight: normal;
        }

        .nav-links {
          list-style-type: none;
          display: flex;
          gap: 1.2rem;
          margin: 0;
          padding: 0;
          flex-wrap: wrap;
        }

        .nav-links li a {
          color: #f0f0f0;
          text-decoration: none;
          font-weight: 500;
          padding: 0.3rem 0.5rem;
          border-radius: 4px;
          position: relative;
          transition: all 0.2s ease;
        }

        .nav-links li a::after {
          content: '';
          display: block;
          width: 0%;
          height: 2px;
          background: #f44336;
          transition: width 0.3s;
          position: absolute;
          bottom: -4px;
          left: 0;
        }

        .nav-links li a:hover::after {
          width: 100%;
        }

        .nav-links li a:hover {
          color: #f44336;
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-links {
            justify-content: flex-start;
            gap: 1rem;
            margin-top: 1rem;
          }
        }
      `}</style>

      <header>
        <nav className="navbar">
          <div className="navbar-title">
            🎬 Modern Family
            <span>Fan App</span>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
