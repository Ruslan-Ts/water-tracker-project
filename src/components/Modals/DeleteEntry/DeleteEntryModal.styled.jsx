import styled from 'styled-components';
import theme from '../../../CommonStyle/themeJSX.jsx';

export const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 280px;
  gap: 24px;
  padding: 32px 24px;
  border-radius: 10px;
  background: #fff;
    transition: opacity 0.3s;

  @media screen and (min-width: 768px) {
    width: 592px;
    height: 208px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperTitle = styled.p`
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ButtonCancel = styled.button`
  width: 232px;
  height: 36px;
  background-color: #d7e3ff;
  color: ${theme.colors.primaryAccent};

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
  }
`;

export const ButtonDelete = styled.button`
  width: 232px;
  height: 36px;
  background-color: ${theme.colors.secondaryRed};
  color: ${theme.colors.primaryLight};

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
  }
`;
