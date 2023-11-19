import { useState } from 'react';
import {
  PasswordTipInfo,
  PasswordTipParagraph,
  PasswordTipStyled,
} from './PasswordToolTip.styled';
import { getTitle, checkPassword } from 'js/validation/passwordStrength';

const PasswordToolTip = ({ score, password }) => {
  const [showTip, setShowTip] = useState(false);
  const toggleToolTip = e => {
    setShowTip(!showTip);
  };

  return (
    <PasswordTipStyled>
      <button type="button" onClick={toggleToolTip}>
        ?
      </button>
      <PasswordTipInfo $show={showTip}>
        <h4>Make sure your password has:</h4>
        <PasswordTipParagraph $marked={checkPassword.hasNumber(password)}>
          Numbers.
        </PasswordTipParagraph>
        <PasswordTipParagraph $marked={checkPassword.hasLetters(password)}>
          Both uppercase and lowercase letters.
        </PasswordTipParagraph>
        <PasswordTipParagraph $marked={checkPassword.hasSpecialSymb(password)}>
          Special symbols like:!"#$%&'()*+,-./:;&lt;=&gt;?@[\]&#123;&#124;&#125;
          ^_`~
        </PasswordTipParagraph>
        <div>
          Password strength: <span>{getTitle(score)}</span>
        </div>
      </PasswordTipInfo>
    </PasswordTipStyled>
  );
};

export default PasswordToolTip;
