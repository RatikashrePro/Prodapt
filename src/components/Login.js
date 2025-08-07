function Login() {
  return (
    <>
      <style>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80vh;
          background: linear-gradient(135deg, #fffaf6, #fce4ec);
          font-family: 'Segoe UI', sans-serif;
        }

        .login-box {
          background-color: #fff;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          min-width: 320px;
          text-align: center;
        }

        .login-box h2 {
          margin-bottom: 1.2rem;
          color: #b22222;
        }

        .login-box input {
          width: 100%;
          padding: 0.6rem;
          margin-bottom: 1rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .login-box button {
          width: 100%;
          padding: 0.6rem;
          background-color: #b22222;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .login-box button:hover {
          background-color: #a11919;
        }

        .tagline {
          margin-top: 1.2rem;
          font-size: 0.9rem;
          color: #777;
          font-style: italic;
        }
      `}</style>

      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back, Dunphy!</h2>
          <input type="text" placeholder="Enter your email, like Phil would..." />
          <input type="password" placeholder="Shhh... even Cam has secrets" />
          <button>Log In</button>
          <div className="tagline">“You miss 100% of the shots you don’t take... unless you're Claire.”</div>
        </div>
      </div>
    </>
  );
}

export default Login;
