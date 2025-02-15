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
            <Label htmlFor='firstName'>First Name</Label>
            <Input
              type='text'
              id='firstName'
              name='firstName'
              autoComplete='given-name'
              defaultValue={user.firstName}
            />
          </div>
          <div>
            <Label htmlFor='lastName'>Last Name</Label>
            <Input
              type='text'
              id='lastName'
              name='lastName'
              autoComplete='family-name'
              defaultValue={user.lastName}
            />
          </div>
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              id='email'
              name='email'
              autoComplete='email'
              defaultValue={user.email}
            />
          </div>
          <div>
            <Label htmlFor='phone'>Phone</Label>
            <Input
              type='text'
              id='phone'
              name='phone'
              autoComplete='tel'
              defaultValue={user.phone}
            />
          </div>
          <div>
            <Label htmlFor='address'>Address</Label>
            <Input
              type='text'
              id='address'
              name='address'
              autoComplete='address-line1'
              defaultValue={user.address?.address}
            />
          </div>
          <div>
            <Label htmlFor='city'>City</Label>
            <Input
              type='text'
              id='city'
              name='city'
              defaultValue={user.address?.city}
            />
          </div>
          <div>
            <Label htmlFor='state'>State</Label>
            <Input
              type='text'
              id='state'
              name='state'
              defaultValue={user.address?.state}
            />
          </div>
          <div>
            <Label htmlFor='postalCode'>Postal Code</Label>
            <Input
              type='text'
              id='postalCode'
              name='postalCode'
              autoComplete='postal-code'
              defaultValue={user.address?.postalCode}
            />
          </div>
          <div>
            <Label htmlFor='country'>Country</Label>
            <Input
              type='text'
              id='country'
              name='country'
              autoComplete='country-name'
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
