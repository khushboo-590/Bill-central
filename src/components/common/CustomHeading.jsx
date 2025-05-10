import React from 'react'

const CustomHeading = ({ headClass, headSpan, headtext, headSpan2 }) => {
  return (
    <div data-aos="fade-left">

    <h2 className={` text-[34px] sm:text-5xl leading-[110%] capitalize text-[#00171F] ${headClass}`}> <span className='font-bold'>{headSpan}</span> {headtext} <span className='font-bold'>{headSpan2}</span> </h2>
  </div>
      )
}

export default CustomHeading

