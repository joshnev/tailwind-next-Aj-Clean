import Cookies from 'js-cookie';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';

export default function ModalMenu() {
  const { dispatch } = useContext(Store);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  return (
    <nav className="bg-blue-600 w-full p-4">
      <ul className="text-white space-y-3">
        <li>
          <Link href="/profile">
            <span className="hover:bg-blue-500 rounded-[8px] p-1 cursor-pointer">
              Profile
            </span>
          </Link>
        </li>
        <li>
          <Link href="/order-history">
            <span className="hover:bg-blue-500 rounded-[8px] p-1 cursor-pointer">
              Order History
            </span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span
              className="hover:bg-blue-500 rounded-[8px] p-1 cursor-pointer"
              onClick={logoutClickHandler}
            >
              Logout
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
