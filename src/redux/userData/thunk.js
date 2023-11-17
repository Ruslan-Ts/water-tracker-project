// import cup from '../cup.svg';
// import pencil from '../pencil.svg';
// import trash from '../trash.svg';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { isOpenAddWaterModal } from '../../../../redux/modals/slice';
// import {
//   Viewport,
//   TableStyled,
//   TableRow,
//   TableCell,
//   TextCell,
//   TimeCell,
//   Button,
//   Container,
//   AddButton,
// } from './Today.styled';

// import AddWaterModal from '../../../Modals/AddWater/AddWaterModal';
// // import { waterInputsForToday } from '../../../../redux/userData/selectors';

// const Today = () => {
//   // const dispatch = useDispatch();
//   // const isOpenModal = useSelector(state => state.modals.isOpenAddWaterModal);

//   // useEffect(() => {
//   //   dispatch(fetchTodayWaterData());
//   // }, [dispatch]);

//   // const initialState = useSelector(state => state.dataUser.today);
//   // const initialData = initialState.waterInputsForToday.map(input => ({
//   //   ...input,
//   //   date: new Date(input.date).toLocaleString(),
//   // }));

//   // const handleAddWater = () => {
//   //   const newId = data.length + 1;
//   //   const newLine = {
//   //     id: newId,
//   //     waterVolume: '200ml',
//   //     date: '14:00 PM',
//   //     owner: '6555014c84527fa976e759bd',
//   //   };
//   //   setData([...data, newLine]);
//   // };

//   // const handleOpenWaterModal = () => {
//   //   dispatch(isOpenAddWaterModal(true));
//   // };

//   // const handleModalClose = () => {
//   //   dispatch(isOpenAddWaterModal(false));
//   //   dispatch(fetchTodayWaterData());
//   // };

//   const handleEdit = () => {
//     // setIsModalOpen(true);
//   };

//   const handleDelete = id => {
//     const updatedData = data.filter(row => row.id !== id);
//     setData(updatedData);
//   };

//   return (
//     <Container>
//       <h2>Today</h2>
//       <Viewport>
//         <TableStyled>
//           <tbody>
//             {data.map(row => (
//               <TableRow key={row.id}>
//                 <TableCell>
//                   <img
//                     src={cup}
//                     alt="Cup"
//                     style={{ width: '26px', height: '26px' }}
//                   />
//                 </TableCell>
//                 <TextCell>{row.text}</TextCell>
//                 <TimeCell>{row.time}</TimeCell>
//                 <TableCell>
//                   <Button onClick={handleEdit}>
//                     <img
//                       src={pencil}
//                       alt="Delete"
//                       style={{ width: '16px', height: '16px' }}
//                     />
//                   </Button>
//                 </TableCell>
//                 <TableCell>
//                   <Button onClick={() => handleDelete(row.id)}>
//                     <img
//                       src={trash}
//                       alt="Delete"
//                       style={{ width: '16px', height: '16px' }}
//                     />
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </tbody>
//         </TableStyled>
//         <AddButton type="submit" onClick={handleOpenWaterModal}>
//           + Add water
//         </AddButton>
//         {isOpenAddWaterModal && <AddWaterModal />}
//       </Viewport>

//       {isOpenModal && <AddWaterModal onClose={handleModalClose} />}
//     </Container>
//   );
// };

// export default Today;
