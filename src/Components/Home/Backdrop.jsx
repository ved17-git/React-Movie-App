import React from 'react';
import CustomDots from './CustomDots';

function Backdrop({ data }) {
  

  return (

<div className=' py-[4vh] px-[12vh] sm:px-[1vh] relative '>
<img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="" className='w-full rounded-2xl' />

<div className='absolute bottom-24 px-[16vh] text-white md:px-[2vh] md:bottom-12 md:overflow-hidden'>
  <p className='text-6xl font-bold md:text-xl'>{data.title}</p>
  <p className='text-xl font-semibold pr-72 mt-5 md:pr-0 md:text-lg sm:hidden' >{data.overview}</p>
</div>


</div>


  );
}

export default Backdrop;



























    // <div className='relative w-full px-[16vh] py-[4vh] bg-[#141414] h-full md:px-[2vh]'>
    //   <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="" className='w-full rounded-2xl' />
    //   <div className='absolute bottom-24 px-[16vh] text-white md:px-[2vh] md:bottom-12 md:overflow-hidden'>
    //     <p className='text-6xl font-bold md:text-xl'>{data.title}</p>
    //     <p className='text-xl font-semibold pr-72 mt-5 md:pr-0 md:text-lg'>{data.overview}</p>
    //   </div>
    // </div>