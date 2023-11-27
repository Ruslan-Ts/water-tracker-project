import React from 'react';
import { ButtonAccept, ButtonBase, ButtonEscape } from './Button.styled';

const Button = ({ typeStyle = 'base', children, ...props }) => {
  switch (typeStyle) {
    case 'base':
      return <ButtonBase {...props}>{children}</ButtonBase>;
    case 'escape':
      return <ButtonEscape {...props}>{children}</ButtonEscape>;
    case 'accept':
      return <ButtonAccept {...props}>{children}</ButtonAccept>;
    default:
      break;
  }
};

export default Button;
