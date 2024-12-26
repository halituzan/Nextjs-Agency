import React from "react";

type Props = {};

const ArrowRigtUp = (props: Props) => {
  return (
    <svg
      className='ms-2'
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        className='stroke-white'
        d='M17.25 15.25V6.75H8.75'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        className='stroke-white'
        d='M17 7L6.75 17.25'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ArrowRigtUp;
