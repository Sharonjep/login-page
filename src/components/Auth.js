import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [resetUsername, setResetUsername] = useState('');

  const handleLogin = () => {
    // Send login credentials to server for validation
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Login successful!');
      } else {
        alert('Invalid login credentials. Please try again.');
      }
    });
  };

  const handleResetPassword = () => {
    // Send username to server for password reset
    fetch('/reset-password', {
      method: 'POST',
      body: JSON.stringify({ username: resetUsername }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Password reset successful! Please check your email for instructions.');
      } else {
        alert('Unable to reset password. Please check your username and try again.');
      }
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Login</h3>
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
              </form>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h4 className="card-title">Reset Password</h4>
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" value={resetUsername} onChange={e => setResetUsername(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleResetPassword}>Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
