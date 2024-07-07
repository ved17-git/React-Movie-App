import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function SearchCard({ data }) {
const nav=useNavigate()

function handleSearchNav(){
  nav(`/${data.id}`);
}

  console.log(data);

  return (
    <div className='px-[1vh] transition duration-500 ease-in-out hover:scale-105 cursor-pointer' onClick={handleSearchNav}>
      <div className='bg-[#1a1a1a] px-4 py-4 rounded-2xl sm:px-2 sm:py-2' >
        <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" className='w-full rounded-2xl'  />
        <div className='flex justify-between text-white px-3 py-2 bg-[#141414] rounded-xl mt-2'>
          <p>{data.vote_average}</p>
          <p className='sm:hidden'>{data.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
