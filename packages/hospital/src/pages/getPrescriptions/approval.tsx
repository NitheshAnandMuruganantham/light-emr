import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-mui';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Loader from '../../components/loading';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://nitheshanand.engineer/">
        light EMR - nithesh anand
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function (props: { setApproved: any; setId: any }) {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  return (
    <>
      <Loader open={loading} setOpen={() => null} />
      <Grid container component="main" sx={{ height: '50vh' }}>
        <CssBaseline />

        <Grid item marginX={'auto'} component={Paper} elevation={6} square>
          <Formik
            validateOnChange
            onSubmit={async ({ id, otp }, { setFieldError }) => {
              props.setId(id);
              props.setApproved(true);
            }}
            validationSchema={Yup.object().shape({
              id: Yup.string().required('id is required'),
              otp: Yup.string().required('otp is required'),
            })}
            initialValues={{
              id: '',
              otp: '',
            }}
          >
            {() => (
              <Form>
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Light EMR - patient Auth - a unified EMR
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Field
                        component={TextField}
                        margin="normal"
                        fullWidth
                        name="id"
                        label="id"
                        autoComplete="off"
                        autoFocus
                      />
                      <Button variant="text" type="button">
                        generate otp
                      </Button>
                    </Box>
                    <Field
                      component={TextField}
                      margin="normal"
                      fullWidth
                      name="otp"
                      label="otp"
                      type="number"
                      autoComplete="off"
                      autoFocus
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Get prescriptions
                    </Button>
                    <Grid container>
                      <Grid item xs></Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </>
  );
}
