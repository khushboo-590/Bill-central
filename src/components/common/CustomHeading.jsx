import React from 'react'

const CustomHeading = ({ headingClass, headingSpan, headingtext, headingSpan2 }) => {
  return (
    <h2 className={`font-family-primary text-[34px] sm:text-5xl leading-[110%] capitalize text-[#00171F] ${headingClass}`}> <span className='font-bold'>{headingSpan}</span> {headingtext} <span className='font-bold'>{headingSpan2}</span> </h2>
  )
}

export default CustomHeading

