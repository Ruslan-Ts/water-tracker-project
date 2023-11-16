import { useState } from 'react';

import { Input } from '../Input.styled';
import { PasswordInputStyled } from './PasswordInput.styled';

import sprite from '../../../img/sprite.svg';

const PasswordInput = ({ ...fields }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordInputStyled>
      <Input type={showPassword ? 'text' : 'password'} {...fields} />
      <button onClick={togglePassword} type="button">
        <svg>
          <use href={sprite + (showPassword ? '#eye' : '#eye-slash')}></use>
        </svg>
      </button>
    </PasswordInputStyled>
  );
};

export default PasswordInput;
