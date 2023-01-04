import React from 'react';

export default function Banner() {
  return (
    <div className="bg-red-500 text-white lg:max-w-[50%] font-primary text-sm mx-auto min-h-[40px] rounded-[5px] flex flex-row justify-center items-center mb-5 drop-shadow-lg">
      <div className="">
        <h1 className="font-bold">Ready for a New Year carpet clean!? </h1>
      </div>
      &nbsp;
      <p>Sign up for a 10% discount & free carpet protection.</p>
    </div>
  );
}
