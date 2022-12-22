import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';

export default function Unauthorized() {
  const router = useRouter();
  const { message } = router.query;

  return (
    <Layout title="Unauthorized Page">
      <h1 className="text-xl flex flex-row items-center gap-1">
        Error
        <span className="text-sm">😮</span>
      </h1>
      {message && <div className="mb-4 text-red-500">{message} ✔️</div>}
    </Layout>
  );
}
