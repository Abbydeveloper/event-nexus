import { useState } from 'react';
import axios from 'axios';

const PasswordResetForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/auth/reset-password', { email });
      setMessage('A password reset link has been sent to your email');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="">
      <h1 className="">Reset Password</h1>
      <form onSubmit={handlePasswordReset}>
        <div className="">
          <label className="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=""
            required
          />
        </div>
        {message && <p className="">{message}</p>}
        {error && <p className="">{error}</p>}
        <button
          type="submit"
          className=""
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default PasswordResetForm;