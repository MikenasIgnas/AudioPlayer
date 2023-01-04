import React from 'react';
import UseAuth from './UseAuth';

type DashboardProps = {
    code: string | null
};
const Dashboard = ({ code }:DashboardProps) => {
  const accessToken = UseAuth(code);
  console.log(accessToken);
  return (
    <div style={{ color: 'black' }}>{code}</div>
    );
};

export default Dashboard;
