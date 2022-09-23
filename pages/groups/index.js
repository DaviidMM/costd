import { useRouter } from 'next/router';
// import Typed from 'react-typed';
import Typed from '../../components/Typed';
import GroupContainer from '../../components/GroupsContainer';
import authStatus from '../../context/auth/status';
import useAuth from '../../hooks/useAuth';
import QRCode from 'react-qr-code';

export default function GroupsPage() {
  const { status } = useAuth();
  const router = useRouter();

  if (status === authStatus.unauthenticated) {
    router.push('/');
  }

  return (
    <div className="flex flex-col gap-4 md:px-56">
      <h1 className="text-4xl font-semibold text-center ">
        <Typed
          bold
          gradientColor
          color="orange"
          texts={['Grupos']}
          cursor=""
          className="w-full"
        />
      </h1>
      <GroupContainer />
    </div>
  );
}
