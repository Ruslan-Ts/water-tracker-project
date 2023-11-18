import styled from 'styled-components';
import theme from '../../../CommonStyle/theme.jsx';

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 24px;
  border-radius: 10px;
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
  width: 24px;
  height: 24px;
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
