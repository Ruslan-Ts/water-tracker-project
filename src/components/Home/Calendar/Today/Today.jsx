import cup from '../cup.svg';
import pencil from '../pencil.svg';
import trash from '../trash.svg';
import React, { useState } from 'react';
import {
  Container,
  TableStyled,
  TableRow,
  TableCell,
  Button,
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
        <img src={cup} alt="Cup" style={{ width: '24px', height: '24px' }} />
      ),
      text: '200ml',
      time: '14:00',
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
        <img src={cup} alt="Cup" style={{ width: '24px', height: '24px' }} />
      ),
      text: '300ml',
      time: '00:00',
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
    <>
      <h2>Today</h2>
      <Container>
        <TableStyled>
          <tbody>
            {data.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.svg}</TableCell>
                <TableCell>{row.text}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>
                  <Button onClick={handleEdit}>
                    {' '}
                    <img
                      src={pencil}
                      alt="Delete"
                      style={{ width: '24px', height: '24px' }}
                    />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(row.id)}>
                    <img
                      src={trash}
                      alt="Delete"
                      style={{ width: '24px', height: '24px' }}
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </TableStyled>
      </Container>
      <Button type="submit" onClick={handleAddWater}>
        + Add water
      </Button>

      {/* {isModalOpen && (
        <div>
        
          <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
        </div>
      )} */}
    </>
  );
};

export default Today;
