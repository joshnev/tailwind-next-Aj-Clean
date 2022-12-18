import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import storm from '../public/images/airflex.png';

export default function Banner() {
  return (
    <div
      className="lg:max-w-[100%] mx-auto min-h-[400px] rounded-[8px] flex flex-row justify-center gap-5 font-primary
     px-2 pb-3 bg-slate-50 drop-shadow-lg"
    >
      <div className="w-[50%] flex flex-col justify-center items-center">
        <h1 className="mt-10 text-2xl font-bold">
          Welcome to AJ carpet clean!
        </h1>
        <p className="mt-2 max-w-[100%] lg:max-w-[50%]">
          We are two local Herne Bay Carpet Cleaners with 10+ years of cleaning
          expierence.
          <br />
          All of our cleans use the latest carpet cleaning technology.
        </p>
        <h2 className="mt-4">
          <span className="text-xl font-semibold">Our Services:</span>
          <div className="flex flex-row gap-1 text-sm">
            <ul>
              <li>- Room Cleans</li>
              <li>- Hall Way & Stairs</li>
              <li>- Sofa Cleans</li>
              <li>- Car Seat Cleans</li>
              <li>- Commercial Cleans</li>
            </ul>
            <ul>
              <li>- House Cleans</li>
              <li>- Rug Cleans</li>
              <li>- Furniture Cleans</li>
              <li>- Curtain Cleans</li>
            </ul>
          </div>
          <button className="primary-button mt-5 drop-shadow-md">
            <Link href="/contact">Contact Us</Link>
          </button>
        </h2>
      </div>
      <div className="w-[50%] flex items-center flex-1">
        <div className="mx-auto">
          <Image src={storm} alt={storm} width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
