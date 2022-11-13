import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'name',
    valueGetter: (params) => params.row.user.name,
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
    field: 'illness',
    headerName: 'illness',
    sortable: false,
    filterable: false,
    minWidth: 200,
    flex: 1,
    valueFormatter: (e) => e?.value?.illness || '',
  },
  {
    field: 'prescription',
    headerName: 'note',
    sortable: false,
    filterable: false,
    minWidth: 200,
    flex: 1,
    valueFormatter: (e) => e?.value?.opinion || '',
  },
];
export default columns;
