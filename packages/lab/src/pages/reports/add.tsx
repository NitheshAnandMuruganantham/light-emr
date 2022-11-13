import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TF from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Form, Field } from 'formik';
import { store } from '../../utils/firebase';
import { TextField } from 'formik-mui';
import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import * as Yup from 'yup';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAddReportMutation } from '../../generated';
import { toast } from 'react-toastify';
import PrescriptionConstructor from './prescriptionContructor';
const AddNewClient: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [addNew, { loading }] = useAddReportMutation();

  return (
    <div>
      <Button variant="outlined" sx={{ m: 1 }} onClick={handleClickOpen}>
        new report
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>new prescription</DialogTitle>
        <Formik
          initialValues={{
            patient_id: '',
            type: '',
            notes: '',
            file: null,
          }}
          validationSchema={() => {
            return Yup.object().shape({
              patient_id: Yup.string().required('Required'),
              note: Yup.string().required('Required'),
              type: Yup.string().required('Required'),
            });
          }}
          onSubmit={async (values: any, { setSubmitting }) => {
            setSubmitting(true);
            const dt = await uploadBytes(
              ref(
                store,
                `reports/${new Date().toDateString()}-${values.patient_id}.pdf`
              ),
              values.file
            );
            const uri = await getDownloadURL(dt.ref);
            addNew({
              variables: {
                data: {
                  data: {
                    type: values.type,
                    uri,
                  },
                  user_id: values.patient_id,
                },
              },
            })
              .catch(() => {
                toast.error('can not create new report');
              })
              .then((dt) => {
                dt &&
                  dt.data &&
                  toast.success('new report created successfully');
                setSubmitting(false);
                handleClose();
              });
          }}
        >
          {({
            submitForm,
            isSubmitting,
            setFieldValue,
            values,
            handleChange,
          }) => (
            <>
              <DialogContent>
                <Form>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                  >
                    <Field
                      component={TextField}
                      sx={{
                        my: 1,
                      }}
                      name="patient_id"
                      type="text"
                      label="patient_id"
                    />
                    <Field
                      component={TextField}
                      sx={{
                        my: 1,
                      }}
                      name="type"
                      type="text"
                      label="test type"
                    />
                    <Field
                      multiline
                      component={TextField}
                      sx={{
                        my: 1,
                      }}
                      name="note"
                      type="text"
                      label="note"
                    />
                    <Field type="file" name="file" />
                    {(isSubmitting || loading) && <LinearProgress />}
                  </Box>
                </Form>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                  onClick={() => {
                    submitForm();
                  }}
                >
                  Add
                </Button>
              </DialogActions>
            </>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default AddNewClient;
