import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useUser } from '@/hooks/useUser';
import PersonalData from '@/components/Dashboard/Profile/personal-data';
const Profile = () => {
  const { accessToken, id } = useSelector((state: RootState) => state.auth);
  const { data, isLoading, error } = useUser(id, accessToken);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div>
      <PersonalData user={data} />
    </div>
  );
};
export default Profile;
