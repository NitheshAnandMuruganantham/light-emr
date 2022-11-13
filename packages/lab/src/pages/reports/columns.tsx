import { Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const columns: GridColDef[] = [
  {
    field: 'user',
    headerName: 'name',
    valueGetter: (params) => params.row?.user?.name,
    width: 300,
    editable: false,
    filterable: false,
    sortable: true,
  },
  {
    field: 'lab',
    headerName: 'lab',
    valueGetter: (params) => params.row?.lab_technician?.lab?.name,
    width: 300,
    editable: false,
    filterable: false,
    sortable: true,
  },
  {
    field: 'type',
    headerName: 'type',
    valueGetter: (params) => params.row?.data?.type || 'general',
    width: 300,
    editable: false,
    filterable: false,
    sortable: true,
  },
  {
    field: 'created_at',
    headerName: 'created_at',
    sortable: false,
    filterable: false,
    minWidth: 200,
    flex: 1,
    valueFormatter: (e) => new Date(e.value).toLocaleString(),
  },
  {
    field: 'download',
    headerName: 'download',
    sortable: false,
    filterable: false,
    minWidth: 200,
    flex: 1,
    renderCell: (params) => <Button>download</Button>,
  },
];
export default columns;
