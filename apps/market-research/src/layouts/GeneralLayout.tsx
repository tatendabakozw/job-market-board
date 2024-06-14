import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '../components/navigation/Navbar';

type Props = {
  children?: ReactNode;
};

const GeneralLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex flex-col w-full min-h-screen ">
        {/* <Toaster /> */}

        <Navbar />
        {props.children}
      </div>
    </>
  );
};

export default GeneralLayout;
