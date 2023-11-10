import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
    e.target.reset();
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter email" required />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
          minLength={8}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
