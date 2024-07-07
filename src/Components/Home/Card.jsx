import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({data}) {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/${data.id}`);
  }

  return (<>





<div className='px-[1vh] transition duration-500 ease-in-out hover:scale-105 cursor-pointer ' onClick={handleNavigation}>



<div className='bg-[#1a1a1a] px-4 py-4 rounded-2xl '>

<img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" className='w-full rounded-2xl' />

<div className='flex justify-between text-white px-3 py-2 bg-[#141414] rounded-xl mt-2'>
<p className=''>   {data.vote_average.toFixed(1)}</p>
<p className='sm:hidden'>{data.release_date}</p>
</div>

</div>




</div>



    </>)
}

export default Card