import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Container from '@/layouts/container';

export default function LoginPage() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center h-screen'>
        <Card className='w-full max-w-md'>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <form>
            <CardContent>
              <div>
                <Label htmlFor='email'>Email</Label>
                <Input type='email' id='email' />
              </div>
              <div>
                <Label htmlFor='password'>Password</Label>
                <Input type='password' id='password' />
              </div>
            </CardContent>
            <CardFooter className='flex justify-between gap-2'>
              <Button type='submit'>Login</Button>
              <Button variant='outline'>Register</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Container>
  );
}
