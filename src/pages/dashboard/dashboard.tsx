import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Container from '@/layouts/container';
import { Link } from 'react-router';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { logoutUser } from '@/features/auth/authSlice';
import TabContent from '@/components/Dashboard/tab-content';

export default function Dashboard() {
  const dispatch = useDispatch();
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
            <TabContent title='Orders' />
          </TabsContent>
          <TabsContent value='profile'>
            <TabContent title='Profile' />
          </TabsContent>
          <TabsContent value='addresses'>
            <TabContent title='Addresses' />
          </TabsContent>
        </Tabs>
        <div className='flex-1 justify-end mt-4'>
          <Button
            variant='outline'
            onClick={() => {
              dispatch(logoutUser());
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </Container>
  );
}
