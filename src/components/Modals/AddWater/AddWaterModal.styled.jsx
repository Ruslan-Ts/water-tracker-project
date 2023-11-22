import styled from 'styled-components';
import theme from 'CommonStyle/theme';

export const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffff;
  border-radius: 10px;
  padding: 24px 12px;
  transition: opacity 0.3s;
  width: 280px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 592px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.div`
  font-size: ${theme.fontSizes.large};
  line-height: calc(32 / 26);
  font-weight: 500;
  color: ${theme.colors.primaryDark};
  padding: 0;
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
  margin-bottom: 16px;
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
  justify-content: start;
  gap: 7px;
`;

export const BtnSign = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 30px;
  border: 1px solid ${theme.colors.primaryAccent};
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.primaryAccent};
  fill: ${theme.colors.primaryAccent};
  box-shadow: 0px 2px 4px rgba(64, 123, 255, 0.2);
`;

export const CounterInput = styled.div`
  font-size: ${theme.fontSizes.medium};
  font-weight: 700;
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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
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

export const TextCounter = styled.p`
  font-size: ${theme.fontSizes.medium};
  font-weight: 700;
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.primaryAccent};
  border: none;
  outline: none;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 41px;
  }
`;
