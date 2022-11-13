import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TF from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import DialogActions from '@mui/material/DialogActions';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Form, Field } from 'formik';
import { Switch, TextField } from 'formik-mui';
import { FormLabel, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import * as Yup from 'yup';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useAddPrescriptionMutation } from '../../generated';
import { toast } from 'react-toastify';
import AutoCompleteComponent from '../../components/autoComplete';
import PrescriptionConstructor from './prescriptionContructor';
const AddNewClient: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [addNew, { loading }] = useAddPrescriptionMutation();
  const [dose, setDose] = React.useState({
    bb: false,
    ab: false,
    bl: false,
    al: false,
    bd: false,
    ad: false,
    now: false,
  });
  const [medicine, setMedicine] = React.useState({
    name: '',
    type: '',
  });
  const [prescription, addPrescription] = React.useState<
    {
      name: string;
      dose: {
        bb: boolean;
        ab: boolean;
        bl: boolean;
        al: boolean;
        bd: boolean;
        ad: boolean;
        now: boolean;
      };
    }[]
  >([]);
  return (
    <div>
      <Button variant="outlined" sx={{ m: 1 }} onClick={handleClickOpen}>
        new prescription
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>new prescription</DialogTitle>
        <Formik
          initialValues={{
            patient_id: '',
            note: '',
            drug: '',
            illness: '',
            next_appointment: new Date(),
            notes: '',
            prescription: {},
          }}
          validationSchema={() => {
            return Yup.object().shape({
              patient_id: Yup.string().required('Required'),
              note: Yup.string().required('Required'),
              illness: Yup.string().required('Required'),
              next_appointment: Yup.string().required('Required'),
            });
          }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            let additionalKeys = {};

            addNew({
              variables: {
                data: {
                  data: {
                    prescription,
                    opinion: values.note,
                    illness: values.illness,
                  },
                  user_id: values.patient_id,
                },
              },
            })
              .catch(() => {
                toast.error('can not create new client');
              })
              .then((dt) => {
                dt && dt.data && toast.success('client created successfully');
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
                      name="illness"
                      type="text"
                      label="illness"
                    />
                    <Field
                      component={TextField}
                      sx={{
                        my: 1,
                      }}
                      name="note"
                      type="text"
                      label="note"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        renderInput={(props) => <TF {...props} />}
                        label="next appointment date"
                        disablePast
                        value={values.next_appointment}
                        onChange={(newValue) => {
                          setFieldValue('to', newValue?.toISOString() || '');
                        }}
                      />
                    </LocalizationProvider>

                    {(isSubmitting || loading) && <LinearProgress />}
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginTop: '10px',
                      }}
                    >
                      {prescription.map((dat) => {
                        return (
                          <div
                            style={{
                              backgroundColor: 'whitesmoke',
                              padding: '10px',
                              margin: '5px',
                              borderRadius: '5px',
                            }}
                          >
                            <div>{dat?.name}</div>
                            <small>
                              {dat.dose.now && 'now'} {dat.dose.bb && 'BB'}{' '}
                              {dat.dose.ab && 'AB'} {dat.dose.bl && 'BL'}{' '}
                              {dat.dose.al && 'AL'} {dat.dose.bd && 'BD'}{' '}
                              {dat.dose.ad && 'AD'}{' '}
                            </small>
                          </div>
                        );
                      })}
                    </Box>
                    <Field
                      component={TextField}
                      sx={{
                        my: 1,
                      }}
                      name="drug"
                      type="text"
                      label="drug"
                    />
                    <FormGroup>
                      <Box
                        sx={{
                          display: 'flex',
                          width: '500px',
                          flexDirection: 'row',
                        }}
                      >
                        <Box sx={{ width: '50%' }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={dose.now}
                                onChange={() =>
                                  setDose((d) => {
                                    return { ...d, now: true };
                                  })
                                }
                              />
                            }
                            label="now"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={dose.now}
                                onChange={() =>
                                  setDose((d) => {
                                    return { ...d, now: true };
                                  })
                                }
                              />
                            }
                            label="before breakfast"
                          />

                          <FormControlLabel
                            control={
                              <Checkbox
                                value={dose.ab}
                                onChange={() =>
                                  setDose((d) => {
                                    return { ...d, ab: true };
                                  })
                                }
                              />
                            }
                            label="after breakfast"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={dose.bl}
                                onChange={() =>
                                  setDose((d) => {
                                    return { ...d, bl: true };
                                  })
                                }
                              />
                            }
                            label="before lunch"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={dose.al}
                                onChange={() =>
                                  setDose((d) => {
                                    return { ...d, al: true };
                                  })
                                }
                              />
                            }
                            label="after lunch"
                          />
                        </Box>
                        <Box sx={{ width: '50%' }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={dose.bd}
                                onChange={() =>
                                  setDose((d) => {
                                    return { ...d, bd: true };
                                  })
                                }
                              />
                            }
                            label="before dinner"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={dose.ad}
                                onChange={() =>
                                  setDose((d) => {
                                    return { ...d, ad: true };
                                  })
                                }
                              />
                            }
                            label="after dinner"
                          />
                        </Box>
                      </Box>
                    </FormGroup>
                    <Button
                      sx={{ m: '10px' }}
                      variant="contained"
                      size="small"
                      onClick={() => {
                        addPrescription((pr) => [
                          ...pr,
                          { dose, name: values.drug },
                        ]);
                        setDose({
                          bb: false,
                          ab: false,
                          bl: false,
                          al: false,
                          bd: false,
                          ad: false,
                          now: false,
                        });
                        setFieldValue('drug', '');
                      }}
                    >
                      add
                    </Button>
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
