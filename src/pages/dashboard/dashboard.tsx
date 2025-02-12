import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Container from '@/layouts/container';
import { Link, Outlet } from 'react-router';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
export default function Dashboard() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  if (!isAuthenticated) {
    window.location.href = '/dummy-store/login';
    return null;
  }
  return (
    <Container>
      <div className='py-8'>
        <Tabs defaultValue='orders' className='w-full'>
          <TabsList>
            <TabsTrigger value='orders'>
              <Link to='/dashboard/orders'>Orders</Link>
            </TabsTrigger>
            <TabsTrigger value='profile'>
              <Link to='/dashboard/profile'>Profile</Link>
            </TabsTrigger>
            <TabsTrigger value='addresses'>
              <Link to='/dashboard/addresses'>Addresses</Link>
            </TabsTrigger>
          </TabsList>
          <TabsContent value='orders'>
            <Outlet />
          </TabsContent>
          <TabsContent value='profile'>
            <Outlet />
          </TabsContent>
          <TabsContent value='addresses'>
            <Outlet />
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
}
