import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 280px;
  min-height: 280px;
  background-color: #ffff;
  border-radius: 10px;
  padding: 32px 24px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonClose = styled.button`
  width: 24px;
  height: 24px;
`;

export const ModalList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
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
  color: #407bff;

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
  }
`;

export const ButtonDelete = styled.button`
  width: 232px;
  height: 36px;
  background-color: #ef5050;
  color: #ffff;

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
  }
`;
