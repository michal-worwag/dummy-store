import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Outlet } from 'react-router';

const TabContent = ({ title }: { title: string }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Outlet />
      </CardContent>
    </Card>
  );
};

export default TabContent;
