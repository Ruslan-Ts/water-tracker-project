import cup from '../cup.svg';
import pencil from '../pencil.svg';
import trash from '../trash.svg';
import React, { useState } from 'react';
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

// const {
//   state: { drinks },
//   dispatch,
// } = useValue();

// useEffect(() => {
//   setDrinks(link);
//   if (drinks.length === 0) getDrinks(dispatch);
// }, []);

const Today = () => {
  const initialData = [
    {
      id: 1,
      svg: (
        <img src={cup} alt="Cup" style={{ width: '26px', height: '26px' }} />
      ),
      text: '200ml',
      time: '14:00 PM',
    },
    // Add more initial data as needed
  ];

  const [data, setData] = useState(initialData);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddWater = () => {
    const newId = data.length + 1;
    const newLine = {
      id: newId,
      svg: (
        <img src={cup} alt="Cup" style={{ width: '26px', height: '26px' }} />
      ),
      text: '200ml',
      time: '14:00 PM',
    };
    setData([...data, newLine]);
    // setIsModalOpen(true);
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
                <TableCell>{row.svg}</TableCell>
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
