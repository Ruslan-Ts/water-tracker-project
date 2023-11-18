import styled from 'styled-components';
import theme from 'CommonStyle/theme';

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #ffff;
  border-radius: 10px;
  padding: 24px 12px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
  }
`;

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormTitle = styled.p`
  font-size: ${theme.fontSizes.medium};
  line-height: calc(20 / 18);
  font-weight: 500;
  color: ${theme.colors.primaryDark};
  padding: 0;
`;
export const Label2 = styled.label`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: ${theme.fontSizes.medium};
  line-height: calc(20 / 18);
  font-weight: 500;
  color: ${theme.colors.primaryDark};
  padding: 0;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: ${theme.fontSizes.small};
  line-height: calc(20 / 16);
  font-weight: 400;
  color: ${theme.colors.primaryDark};
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 7px;
`;

export const BtnSign = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 30px;
  border: 1px solid ${theme.colors.primaryAccent};
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.primaryAccent};
  fill: ${theme.colors.primaryAccent};
`;

export const CounterInput = styled.div`
  width: 92px;
  height: 36px;
  border-radius: 40px;
  color: ${theme.colors.primaryAccent};
  background-color: ${theme.colors.secondaryLightBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const ModalList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
  }
`;

export const BtnSave = styled.button`
  width: 256px;
  height: 36px;
  background-color: ${theme.colors.primaryAccent};
  color: ${theme.colors.primaryLight};

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
  }
`;

export const BtnCounter = styled.button`
  width: 256px;
  height: 36px;
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.primaryAccent};
  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 72px;
    height: 44px;
  }
`;
