import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;
export const Viewport = styled.div`
  height: 220px;
  width: 100%;
  overflow-y: auto;

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
  width: 100%;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #d7e3ff;
  & Button {
    background-color: transparent;
  }
`;

export const TableCell = styled.td`
  text-align: left;
  color: var(--primery-color-blue, #407bff);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
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
`;

export const Button = styled.button`
  margin: 4px;
  cursor: pointer;
`;

export const AddButton = styled.button`
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
