import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  height: 250px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d7e3ff;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const TableStyled = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #d7e3ff;
`;

export const TableCell = styled.td`
  padding: 8px;
  text-align: center;
`;

export const Button = styled.button`
  margin: 4px;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 4px;
  margin: 4px;
`;
