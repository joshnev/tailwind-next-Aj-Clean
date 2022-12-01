import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '- Kerrys Cakes' : 'Kerrys Cakes'}</title>
        <meta name="description" content="Cake Ecommerce website" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between px-4 shadow-md items-center">
            <Link href="/">
              <span className="text-lg font-semibold">Kerrys Cakes</span>
            </Link>
            <div className="space-x-4">
              <Link href="/cart">Cart</Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Kerrys Cakes @ 2022
        </footer>
      </div>
    </>
  );
}
