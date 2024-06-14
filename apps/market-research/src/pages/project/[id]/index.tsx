import GeneralLayout from '../../../layouts/GeneralLayout';
import { useRouter } from 'next/router';
import React from 'react';

const SingleProject = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <GeneralLayout>
      <div className="mx-auto max-w-7xl w-full p-4">SingleProject</div>
    </GeneralLayout>
  );
};

export default SingleProject;
