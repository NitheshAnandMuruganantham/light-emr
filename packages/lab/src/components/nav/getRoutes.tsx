import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const GetHeaderNames = () => {
  const location = useLocation();
  const [path, setPath] = useState<string>('');

  useEffect(() => {
    setPath(
      locationNames.find((dat) => dat.path === location.pathname)?.name || ''
    );
  }, [location]);

  return (
    <Typography variant="h6" noWrap component="div">
      {path}
    </Typography>
  );
};

const locationNames = [
  {
    path: '/',
    name: 'Manage report uploads',
  },
];

export default GetHeaderNames;
