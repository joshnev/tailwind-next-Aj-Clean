import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import ModalMenu from './ModalMenu';

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const { state } = useContext(Store);
  const { cart } = state;
  const [modalMenu, setModalMenu] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  return (
    <>
      <Head>
        <title>
          {title ? title + '- AJ Carpet Cleaner' : 'AJ Carpet Cleaner'}
        </title>
        <meta name="description" content="Carpet Cleaning website" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between px-4 shadow-md items-center bg-blue-500">
            <Link href="/">
              <span className="text-lg text-white font-semibold font-primary">
                AJ Cleaning
              </span>
            </Link>
            <div className="space-x-2 flex">
              <Link href="/cart">
                <span className="flex hover:bg-blue-600 p-1 rounded-md drop-shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-[50px] bg-blue-200 px-2 py-1 text-xs font-bold text-stone-800">
                      {cartItemsCount}
                    </span>
                  )}
                </span>
              </Link>
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <>
                  <span
                    onClick={() => setModalMenu(!modalMenu)}
                    className="text-white font-primary cursor-pointer flex items-center hover:bg-blue-600 p-1 rounded-md drop-shadow-md"
                  >
                    {session.user.name}
                  </span>
                  <div
                    className={`${
                      modalMenu ? 'max-h-[154px]' : 'max-h-0'
                    } absolute z-20 right-0 mt-[28px] rounded-md overflow-hidden shadow-2xl transition-all delay-100}`}
                  >
                    <ModalMenu />
                  </div>
                </>
              ) : (
                <Link href="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        &nbsp;
        <footer className="flex h-10 justify-center items-center shadow-inner">
          AJ Carpet Clean @ 2022
        </footer>
      </div>
    </>
  );
}
