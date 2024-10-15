'use client';

import ProfileForm from '../components/ProfileForm';

const ActionPage = ({ params }: { params: { action: string } }) => {
  return <ProfileForm action={params.action} />;
};

export default ActionPage;
