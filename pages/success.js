import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

export default function success() {
  return (
    <Layout title="Success">
      <div className="font-primary">
        <p className="pb-2">
          <span className="font-bold text-lg">Success!</span> Thank you for your
          message. We will get back to you very soon.
        </p>
        <button className="primary-button text-sm">
          <Link href="/">Back to homepage</Link>
        </button>
      </div>
    </Layout>
  );
}
