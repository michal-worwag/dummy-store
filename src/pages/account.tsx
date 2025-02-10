import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function Account() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  if (!isAuthenticated) {
    window.location.href = '/dummy-store/login';
    return null;
  }
  return <div>Account</div>;
}
