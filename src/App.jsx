import { useState } from "react";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email Login
  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful ✅");
      console.log(user.user);
    } catch (error) {
      alert(error.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      alert("Google Login Successful ✅");
      console.log(result.user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <h1>Welcome! </h1>
        <div className="subtitle">Please enter your details.</div>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="forgot">Forgot password</div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <div className="google-btn" onClick={handleGoogleLogin}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
          />
          Sign in with Google
        </div>

        <div className="footer">
          Don’t have an account? <span>Sign up here</span>
        </div>
      </div>
    </div>
  );
}

export default App;