import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useMediaQuery } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';

const columns: GridColDef[] = [
  {
    field: 'order',
    headerName: 'Order',
    width: 220,
    editable: true,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 220,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
 
    width: 210,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 210,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 210,
    editable: true,
  },
];

const rows = [
  { id: 1, order: 'Order 001', address: '123 Main St', date: 1630208400000, status: 'Pending', price: 100 },
  { id: 2, order: 'Order 002', address: '456 Oak Ave', date: 1630122000000, status: 'Shipped', price: 75 },
  { id: 3, order: 'Order 003', address: '789 Elm St', date: 1630035600000, status: 'Delivered', price: 50 },
  { id: 4, order: 'Order 004', address: '234 Pine Rd', date: 1629949200000, status: 'Pending', price: 125 },
  { id: 5, order: 'Order 005', address: '567 Birch Ln', date: 1629862800000, status: 'Cancelled', price: 0 },
];


    const DataGridDemo = () => {
        const theme = useTheme();
        const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
        const screenXs = useMediaQuery(theme.breakpoints.only('xs'));
        const screenSm = useMediaQuery(theme.breakpoints.only('sm'));
        const screenMd = useMediaQuery(theme.breakpoints.only('md'));
        const screenLg = useMediaQuery(theme.breakpoints.only('lg'));
        const screenXl = useMediaQuery(theme.breakpoints.only('xl'));
      
        let height = 360;
        let width = 1100;
        if (screenXs) {
          height = 200;
          width = 200;
        } else if (screenSm) {
          height = 250;
          width = 400;
        } else if (screenMd) {
          height = 300;
          width = 600;
        } else if (screenLg) {
          height = 360;
          width = 800;
        } else if (screenXl) {
          height = 360;
          width = 1100;
        }

  return (
    <Box  >
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        Width={width}
        Height={height}
      />
     
    </Box>
  );
  }
  export default DataGridDemo;


