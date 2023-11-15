import { useState } from 'react';
import { Input } from '../Input.styled';
import { PasswordInputStyled } from './PasswordInput.styled';

const PasswordInput = ({ ...fields }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordInputStyled>
      <Input type={showPassword ? 'text' : 'password'} {...fields} />
      <button onClick={togglePassword} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M2.65331 5.482C2.02961 6.21812 1.56518 7.07547 1.28931 8C2.15064 10.892 4.82931 13 7.99997 13C8.66197 13 9.30197 12.908 9.90864 12.7367M4.15197 4.152C5.29372 3.39854 6.63202 2.99788 7.99997 3C11.1706 3 13.8486 5.108 14.71 7.99867C14.2379 9.5782 13.2246 10.941 11.848 11.848M4.15197 4.152L1.99997 2M4.15197 4.152L6.58531 6.58533M11.848 11.848L14 14M11.848 11.848L9.41464 9.41467C9.60037 9.22893 9.7477 9.00844 9.84822 8.76577C9.94874 8.52309 10.0005 8.263 10.0005 8.00033C10.0005 7.73767 9.94874 7.47757 9.84822 7.2349C9.7477 6.99223 9.60037 6.77173 9.41464 6.586C9.22891 6.40027 9.00841 6.25294 8.76574 6.15242C8.52307 6.0519 8.26297 6.00016 8.00031 6.00016C7.73764 6.00016 7.47755 6.0519 7.23487 6.15242C6.9922 6.25294 6.77171 6.40027 6.58597 6.586M9.41397 9.414L6.58664 6.58667"
            stroke="#407BFF"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </PasswordInputStyled>
  );
};

export default PasswordInput;