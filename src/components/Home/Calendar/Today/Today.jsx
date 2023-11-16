import cup from '../cup.svg';
import pencil from '../pencil.svg';
import trash from '../trash.svg';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Viewport,
  TableStyled,
  TableRow,
  TableCell,
  TextCell,
  TimeCell,
  Button,
  Container,
  AddButton,
} from './Today.styled';

const Today = () => {
  const initialState = useSelector(state => state.dataUser.today);
  const initialData = initialState.waterInputsForToday.map(input => ({
    ...input,
    date: new Date(input.date).toLocaleString(),
  }));
  const [data, setData] = useState(initialData);

  const handleAddWater = () => {
    const newId = data.length + 1;
    const newLine = {
      id: newId,
      waterVolume: '200ml',
      date: '14:00 PM',
      owner: '6555014c84527fa976e759bd',
    };
    setData([...data, newLine]);
  };

  const handleDelete = id => {
    const updatedData = data.filter(row => row.id !== id);
    setData(updatedData);
  };

  const handleEdit = () => {
    // setIsModalOpen(true);
  };

  return (
    <Container>
      <h2>Today</h2>
      <Viewport>
        <TableStyled>
          <tbody>
            {data.map(row => (
              <TableRow key={row.id}>
                <TableCell>
                  <img
                    src={cup}
                    alt="Cup"
                    style={{ width: '26px', height: '26px' }}
                  />
                </TableCell>
                <TextCell>{row.text}</TextCell>
                <TimeCell>{row.time}</TimeCell>
                <TableCell>
                  <Button onClick={handleEdit}>
                    <img
                      src={pencil}
                      alt="Delete"
                      style={{ width: '16px', height: '16px' }}
                    />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(row.id)}>
                    <img
                      src={trash}
                      alt="Delete"
                      style={{ width: '16px', height: '16px' }}
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </TableStyled>
        <AddButton type="submit" onClick={handleAddWater}>
          + Add water
        </AddButton>
      </Viewport>

      {/* {isModalOpen && (
        <div>
        
          <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
        </div>
      )} */}
    </Container>
  );
};

export default Today;
