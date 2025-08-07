// components/Contactus.js
function Contactus() {
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem", fontFamily: "'Helvetica Neue', sans-serif" }}>
      <h2 style={{ color: "#b22222", textAlign: "center" }}>Contact the Family</h2>
      <p style={{ textAlign: "center", fontStyle: "italic", color: "#555" }}>
        Got a question for the Dunphys, Pritchetts, or Tuckers? Drop us a line!
      </p>
      <form>
        <div style={{ marginBottom: "1rem" }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            placeholder="e.g. Phil Dunphy"
            style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            placeholder="phil@dunphyrealty.com"
            style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Message:</label><br />
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us what Gloria did this time..."
            style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#b22222",
            color: "#fff",
            padding: "0.7rem 1.5rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Send to the Family
        </button>
      </form>
      <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#888", textAlign: "center" }}>
        * This may or may not reach Jay. He’s not great with email.
      </p>
    </div>
  );
}

export default Contactus;
