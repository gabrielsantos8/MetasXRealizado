import React from "react";
import './style.css'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: '01/Janeiro', col2: '5000', col3: '10' },
  { id: 2, col1: '02/Fevereiro', col2: '2000', col3: '10' },
  { id: 3, col1: '03/Março', col2: '700', col3: '10' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Mês', width: 150 },
  { field: 'col2', headerName: 'Meta', width: 150, editable: true },
  { field: 'col3', headerName: 'Perc.', width: 150, editable: true },

];


export default function Table() {
  return (
    <div style={{ height: 300, backgroundColor: '#cccc', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}

      />
    </div>
  );
}
