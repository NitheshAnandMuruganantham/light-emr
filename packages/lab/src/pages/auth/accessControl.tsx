import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AccessControlProps {
  role: string;
  children: React.ReactNode;
}

const AccessControl: React.FunctionComponent<AccessControlProps> = ({
  role,
  children,
}) => {
  const { pathname } = useLocation();

  return <>{children}</>;
};

export default AccessControl;
