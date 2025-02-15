import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { User } from '@/models/user';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useUpdateUser } from '@/hooks/useUpdateUser';

type PersonalDataProps = {
  user: Partial<User>;
};

const PersonalData = ({ user }: PersonalDataProps) => {
  const { accessToken, id } = useSelector((state: RootState) => state.auth);

  const { mutate, isPending } = useUpdateUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = {
      firstName: (formData.get('firstName') as string) || '',
      lastName: (formData.get('lastName') as string) || '',
      email: (formData.get('email') as string) || '',
      phone: (formData.get('phone') as string) || '',
      address: {
        address: (formData.get('address') as string) || '',
        city: (formData.get('city') as string) || '',
        state: (formData.get('state') as string) || '',
        postalCode: (formData.get('postalCode') as string) || '',
        country: (formData.get('country') as string) || '',
      },
    };

    mutate({ user: userData, accessToken, id });
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <Card className='p-4'>
      <span className='text-sm text-gray-500'>
        Update profile only simulate change on server
      </span>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <Label>First Name</Label>
            <Input type='text' name='firstName' defaultValue={user.firstName} />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input type='text' name='lastName' defaultValue={user.lastName} />
          </div>
          <div>
            <Label>Email</Label>
            <Input type='email' name='email' defaultValue={user.email} />
          </div>
          <div>
            <Label>Phone</Label>
            <Input type='text' name='phone' defaultValue={user.phone} />
          </div>
          <div>
            <Label>Address</Label>
            <Input
              type='text'
              name='address'
              defaultValue={user.address?.address}
            />
          </div>
          <div>
            <Label>City</Label>
            <Input type='text' name='city' defaultValue={user.address?.city} />
          </div>
          <div>
            <Label>State</Label>
            <Input
              type='text'
              name='state'
              defaultValue={user.address?.state}
            />
          </div>
          <div>
            <Label>Postal Code</Label>
            <Input
              type='text'
              name='postalCode'
              defaultValue={user.address?.postalCode}
            />
          </div>
          <div>
            <Label>Country</Label>
            <Input
              type='text'
              name='country'
              defaultValue={user.address?.country}
            />
          </div>
        </div>

        <Button type='submit' className='mt-4'>
          Update
        </Button>
      </form>
    </Card>
  );
};

export default PersonalData;
