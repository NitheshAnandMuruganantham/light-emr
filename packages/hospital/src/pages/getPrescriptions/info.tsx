import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Bill from '../../components/printTemplates';
import { useGetOnePrescriptionLazyQuery } from '../../generated';
import { CircularProgress } from '@mui/material';
import ReactToPrint from 'react-to-print';
import { toast } from 'react-toastify';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Info: React.FunctionComponent<{
  name: string;
  id: string;
  setLoading: (loading: boolean) => void;
}> = ({ name, id, setLoading }) => {
  const [open, setOpen] = React.useState(false);
  const [getData, { loading, error, data }] = useGetOnePrescriptionLazyQuery({
    variables: {
      id,
    },
  });
  const printRef = React.useRef<any>();
  return (
    <>
      <Button
        onClick={async () => {
          try {
            getData();
            setLoading(true);
            setLoading(false);
            setOpen(true);
          } catch (e) {
            console.log(e);
            setOpen(false);
            setLoading(false);
            toast.error('can not fetch bill details');
          }
        }}
        variant="outlined"
        size="small"
      >
        {name}
      </Button>
      {open && (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          fullWidth
          maxWidth="md"
          onClose={() => setOpen(false)}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{}</DialogTitle>
          <DialogContent>
            <span ref={printRef}>
              {!loading && data ? (
                <code>{JSON.stringify(data.prescription_by_pk)}</code>
              ) : (
                <CircularProgress />
              )}
            </span>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>close</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default Info;
