import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { NavLink } from 'react-router';

const DashboardNav = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col gap-2'>
          <NavLink to='/dashboard'>Dashboard</NavLink>
          <NavLink to='/dashboard/orders'>Orders</NavLink>
          <NavLink to='/dashboard/profile'>Profile</NavLink>
          <NavLink to='/dashboard/addresses'>Addresses</NavLink>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardNav;
