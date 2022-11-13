import * as React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import useRole from '../../hooks/role';
import { Box } from '@mui/system';
import Approval from './approval';
import { Button, LinearProgress, TextField } from '@mui/material';
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
import Info from './info';

const Clients = () => {
  const [role, loadingRole] = useRole();
  const [search, setSearch] = React.useState('');
  const [id, setId] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [sort, SetSort] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(10);

  const { data, loading } = useGetReportsSubscription({
    variables: {
      where: {
        user_id: {
          _eq: id,
        },
      },
      offset: (page - 1) * pageSize < 0 ? 0 : (page - 1) * pageSize,
      limit: pageSize,
    },
  });
  const { data: presCount, loading: presCountLoading } =
    useGetReportsCountSubscription({
      variables: {
        where: {
          user_id: {
            _eq: id,
          },
        },
      },
    });
  const [approved, setApproved] = React.useState(false);
  return (
    <Box>
      <Box width={'100%'} textAlign="center">
        <LinearProgress
          sx={{
            visibility: presCountLoading || loading ? 'visible' : 'hidden',
          }}
        />
        {approved ? (
          <DataGridComponent
            data={data?.report || []}
            pageSize={pageSize}
            setPageSize={setPageSize}
            setFilter={() => null}
            setPage={setPage}
            setSort={SetSort}
            loading={loading || presCountLoading || loadingRole}
            rowCount={presCount?.report_aggregate?.aggregate?.count || 0}
            columns={[
              ...columns,
              {
                field: 'info',
                headerName: 'info',
                sortable: false,
                minWidth: 120,
                flex: 1,
                renderCell: (params) => (
                  <Info
                    setLoading={() => null}
                    name="info"
                    id={params.row.id}
                  />
                ),
              },
            ]}
          />
        ) : (
          <Approval setId={setId} setApproved={setApproved} />
        )}
      </Box>
    </Box>
  );
};

export default Clients;
