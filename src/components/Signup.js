function Signup() {
  return (
    <>
      <style>{`
        .signup-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80vh;
          background: linear-gradient(135deg, #fefcea, #f1daff);
          font-family: 'Segoe UI', sans-serif;
        }

        .signup-box {
          background-color: #fff;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          min-width: 320px;
          text-align: center;
        }

        .signup-box h2 {
          margin-bottom: 1.5rem;
          color: #8e24aa;
        }

        .signup-box input {
          width: 100%;
          padding: 0.6rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }

        .signup-box button {
          width: 100%;
          padding: 0.6rem;
          background-color: #8e24aa;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .signup-box button:hover {
          background-color: #6a1b9a;
        }

        .tagline {
          margin-top: 1.2rem;
          font-size: 0.9rem;
          color: #666;
          font-style: italic;
        }
      `}</style>

      <div className="signup-container">
        <div className="signup-box">
          <h2>Join the Family!</h2>
          <input type="text" placeholder="Full Name (e.g., Phil Dunphy)" />
          <input type="email" placeholder="Email like Gloria would type it 💃" />
          <input type="password" placeholder="Shh... Jay's watching" />
          <button>Become a Member</button>
          <div className="tagline">“We’re just like a normal family… only louder and with more drama.”</div>
        </div>
      </div>
    </>
  );
}

export default Signup;
