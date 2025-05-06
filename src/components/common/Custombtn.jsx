import React from 'react'

const Custombtn = ({ btn, className }) => {
  return (
    <button
      className={`  cursor-pointer bg-[#00A8E8]  text-[16px]  leading-[18.4px]  py-[12px] px-[20px] rounded-[0px_100px_100px_70px] flex items-center justify-center                
      ${className}`}
    >
      {btn}
    </button>
                      
  );
};

export default Custombtn;
