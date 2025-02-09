import { useActionState, useEffect, useState } from 'react';
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
import { loginAction } from '@/actions/login';
import { Eye, EyeOff } from 'lucide-react';
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [state, formAction, pending] = useActionState(loginAction, {
    username: '',
    password: '',
    success: false,
    error: null,
  });

  console.log(state);

  useEffect(() => {
    setShowError(true);
    if (state.error) {
      const timeout = setTimeout(() => {
        setShowError(false);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [state.error]);

  return (
    <Container>
      <div className='flex flex-col items-center justify-center h-screen'>
        <Card className='w-full max-w-md'>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to your account to continue</CardDescription>
          </CardHeader>
          <form action={formAction}>
            <CardContent>
              <div>
                <Label htmlFor='username'>Username</Label>
                <Input
                  type='text'
                  id='username'
                  name='username'
                  defaultValue={state.username}
                />
              </div>
              <div>
                <Label htmlFor='password'>Password</Label>
                <div className='flex items-center gap-2'>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    name='password'
                    defaultValue={state.password}
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
              {showError && (
                <p className='text-red-500 text-sm mb-2'>{state.error}</p>
              )}
              <div className='flex justify-beetwen gap-2 w-full'>
                <Button type='submit' disabled={pending}>
                  {pending ? 'Logging in...' : 'Login'}
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
