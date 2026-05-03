import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    if (e) e.preventDefault(); // important safety fix

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    // store dummy login token
    localStorage.setItem("token", "dummy123");

    // redirect to dashboard (safe method)
    window.location.replace("https://zerodha-clone-3ym2.vercel.app/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={(e) => handleSignup(e)}>
        Create Account
      </button>
    </div>
  );
}

export default Signup;