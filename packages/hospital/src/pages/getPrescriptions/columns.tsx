import { GridColDef } from '@mui/x-data-grid';

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
    field: 'hospital',
    headerName: 'hospital',
    valueGetter: (params) => params.row?.doctor?.hospital?.name,
    width: 300,
    editable: false,
    filterable: false,
    sortable: true,
  },
  {
    field: 'doctor',
    headerName: 'doctor',
    valueGetter: (params) => params.row?.doctor?.name,
    width: 300,
    editable: false,
    filterable: false,
    sortable: true,
  },
  {
    field: 'illness',
    headerName: 'illness',
    valueGetter: (params) => params.row?.prescription?.illness,
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
];
export default columns;
