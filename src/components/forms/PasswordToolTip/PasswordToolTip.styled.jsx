import styled from 'styled-components';
import theme from 'CommonStyle/themeJSX';

export const PasswordTipStyled = styled.div`
  position: relative;
  @media screen and (max-width: 767px) {
    display: none;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    background-color: ${theme.colors.primaryAccent};
    color: ${theme.colors.primaryLight};
    position: absolute;
    right: -35px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 100%;
  }
`;

export const PasswordTipParagraph = styled.p`
  ${props => (props.$marked ? { color: 'green', opacity: 0.5 } : null)}
  font-size: 14px;
  padding-left: 10px;
  margin: 5px 0;
`;

export const PasswordTipInfo = styled.div`
  display: ${props => (props.$show ? 'block' : 'none')};
  position: absolute;
  right: -46px;
  top: 42px;
  background-color: #eee;
  width: 360px;
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    right: 5px;
    top: -19px;
    border-style: solid;
    border-width: 20px 20px 0;
    border-color: #eee transparent transparent transparent;
    transform: rotate(180deg);
  }
  @media screen and (min-width: 1280px) {
    width: 410px;
  }
  div {
    font-size: 16px;
    text-align: right;
    margin-top: 10px;
    span {
      font-weight: 700;
    }
  }
`;
