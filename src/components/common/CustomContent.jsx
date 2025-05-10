import React from 'react'

const CustomContent = ({content,className}) => {
  return (
    <div data-aos="fade-right">

          <p className={` font-noraml text-base leading-[150%] ${className}`}>{content}</p>
</div>
  )
}

export default CustomContent
