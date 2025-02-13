import BackHomeNavbar from '@/components/atoms/back-home-navbar';
import React from 'react';
import CreateProjectForm from './create-project-form';

const IndexClients = () => {
  return (
    <div className='pt-7 pb-[30vh] px-4 lg:px-0'>
      <BackHomeNavbar />
      <CreateProjectForm />
    </div>
  );
};

export default IndexClients;
