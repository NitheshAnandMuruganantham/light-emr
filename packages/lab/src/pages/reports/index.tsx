import * as React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import useRole from '../../hooks/role';
import { Box } from '@mui/system';
import { Button, LinearProgress, TextField } from '@mui/material';
import AddNewClient from './add';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  useGetReportsCountSubscription,
  useGetReportsSubscription,
} from '../../generated';
import gqlClient from '../../utils/client';
import { toast } from 'react-toastify';
import columns from './columns';
import DataGridComponent from '../../components/dataGrid';

const Clients = () => {
  const [role, loadingRole] = useRole();
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [sort, SetSort] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(10);

  const { data, loading } = useGetReportsSubscription({
    variables: {
      where: {},
      offset: (page - 1) * pageSize < 0 ? 0 : (page - 1) * pageSize,
      limit: pageSize,
    },
  });
  const { data: presCount, loading: presCountLoading } =
    useGetReportsCountSubscription({
      variables: {
        where: {},
      },
    });
  return (
    <Box>
      <AddNewClient />
      <TextField
        fullWidth
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        sx={{
          my: 2,
        }}
        name="search"
        label="Search"
      />
      <Box width={'100%'} textAlign="center">
        <LinearProgress
          sx={{
            visibility: presCountLoading || loading ? 'visible' : 'hidden',
          }}
        />
        <DataGridComponent
          data={data?.report || []}
          pageSize={pageSize}
          setPageSize={setPageSize}
          setFilter={() => null}
          setPage={setPage}
          setSort={SetSort}
          loading={loading || presCountLoading || loadingRole}
          rowCount={presCount?.report_aggregate?.aggregate?.count || 0}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Clients;
