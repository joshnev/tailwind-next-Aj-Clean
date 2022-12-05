import React from 'react';

export default function Banner() {
  return (
    <div className="bg-red-500 text-white lg:max-w-[50%] mx-auto min-h-[40px] rounded-[5px] flex flex-row  justify-center items-center">
      <h1 className=" font-bold">🎄 Ready for the festive season!?</h1>
      &nbsp;
      <p>
        Check out our latest Christmas Cakes{' '}
        <span className="underline underline-offset-4">here.</span> 🎄
      </p>
    </div>
  );
}
