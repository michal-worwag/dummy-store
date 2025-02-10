import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Container from '@/layouts/container';
import { Eye, EyeOff } from 'lucide-react';
import { useLogin } from '@/hooks/useAuth';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isPending } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutate({
      username: formData.get('username') as string,
      password: formData.get('password') as string,
    });
  };

  return (
    <Container>
      <div className='flex flex-col items-center justify-center h-screen'>
        <Card className='w-full max-w-md'>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to your account to continue</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div>
                <Label htmlFor='username'>Username</Label>
                <Input type='text' id='username' name='username' />
              </div>
              <div>
                <Label htmlFor='password'>Password</Label>
                <div className='flex items-center gap-2'>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    name='password'
                  />
                  <Button
                    type='button'
                    variant='outline'
                    size='icon'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className='block'>
              <div className='flex justify-beetwen gap-2 w-full'>
                <Button type='submit' disabled={isPending}>
                  {isPending ? 'Logging in...' : 'Login'}
                </Button>
                <Button variant='outline'>Register</Button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Container>
  );
}
