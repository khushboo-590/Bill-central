import React from 'react'
import light from '../assets/images/png/light.png'
import Custombtn from './common/Custombtn'
import { White_Arrow } from '../utils/icon'


const SwitchEngery = () => {
  return (
      <section className='bg-white'>
          <div className='container max-w-[1140px] mx-auto flex flex-col items-center justify-center  p-4'>
              <div className=' grid grid-cols-1 lg:grid-cols-2 gap-[75px]'>
                  <img src={light} className='mx-auto'></img>
                  <div className='flex flex-col'>
                      <h2 className=' text-[38px] md:text-[48px]   text-[#1E1E1E] leading-[110%] lg:max-w-[409px] text-transform: capitalize; font-bold'>Switching Energy <span className='font-normal'>Made Simple</span> </h2>            
                     <p className='text-base leading-[150%] font-normal text-[00171F] opacity-90 mt-4 lg:max-w-[558px]'>Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.</p>
                      <p className='text-[24px] leading-[110%] font-normal text-[#003459]  mt-[38px] text-transform: capitalize; '>Benefits of Comparing Energy Plans</p>
                      <ul className='list-disc mt-4 ml-5'>
                          <li className='font-normal text-base  leading-[150%] text-[#00171F] '>Save money by finding cheaper deals.</li>
                          <li className='font-normal text-base  leading-[150%] text-[#00171F] mt-2'>Get better customer service.</li>
                          <li className='font-normal text-base  leading-[150%] text-[#00171F] mt-2'>Explore greener, more sustainable energy options.</li>
                      </ul>
                      <Custombtn btn={ <>
                                                Compare With Us   <White_Arrow />
                                              </>} className='bg-[#00A8E8] max-w-[201px] text-white  font-bold  mt-[42px] '/>
                  </div>
                  </div>
                     
              
          </div>
          
    </section>
  )
}



export default SwitchEngery
