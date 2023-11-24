import { HoverBtnStyled } from 'CommonStyle/Buttons/Button.styled';
import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  h2 {
    color: #2f2f2f;
    font-size: 24px;
    font-weight: 500;
    line-height: calc(30 / 24);

    @media screen and (min-width: 768px) {
      font-size: 26px;
      line-height: calc(32 / 26);
    }

    @media screen and (min-width: 1440px) {
    }
  }
`;
export const Viewport = styled.div`
  height: 220px;
  overflow-y: auto;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    height: 228px;
  }

  @media screen and (min-width: 768px) {
    height: 212px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9ebbff;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: #d7e3ff;
    width: 1px;
  }
`;

export const TableStyled = styled.table`
  border-collapse: collapse;
  @media screen and (min-width: 768px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 534px;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #d7e3ff;
  margin-bottom: 12px;

  & Button {
    background-color: transparent;
  }
`;

export const ImgCont = styled.div`
  justify-content: center;
  display: flex;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export const TableCell = styled.td`
  text-align: center;
  color: var(--primery-color-blue, #407bff);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

export const TextCell = styled.td`
  padding: 12px;
  text-align: left;
  color: var(--primery-color-blue, #407bff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const TimeCell = styled.td`
  padding-right: 35px;
  text-align: left;
  color: var(--primery-color-black, #2f2f2f);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    padding-right: 390px;
  }

  @media screen and (min-width: 768px) {
    padding-right: 278px;
  }
`;

export const Button = styled.button`
  margin: 4px;
  cursor: pointer;
`;

export const AddButton = styled(HoverBtnStyled)`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 12px 8px;
  color: #407bff;
  background-color: transparent;
`;

export const Input = styled.input`
  padding: 4px;
  margin: 4px;
`;
