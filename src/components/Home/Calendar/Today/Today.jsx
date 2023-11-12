import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: '200 ml', col2: '14:00 PM', col3: 'edit', col4: 'delete' },
  { id: 2, col1: '200 ml', col2: '14:00 PM' },
  { id: 3, col1: '200 ml', col2: '14:00 PM' },
  { id: 4, col1: '200 ml', col2: '14:00 PM' },
  { id: 5, col1: '200 ml', col2: '14:00 PM' },
  { id: 6, col1: '200 ml', col2: '14:00 PM' },
];

const columns = [
  { field: 'col1', headerName: '', width: 150 },
  { field: 'col2', headerName: '', width: 150 },
  { field: 'col3', headerName: '', width: 150 },
  { field: 'col4', headerName: '', width: 150 },
];
const Today = () => {
  return (
    <>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </>
  );
};

export default Today;
