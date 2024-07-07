import React, { useEffect, useState } from 'react'
import Search from '../Search/Search'
import Card from '../Home/Card'
import Navbar from '../Navbar'
import SearchCard from '../Search/SearchCard';

function Tv() {

  const apiKey = '91a7bc615e78124694205aa0a77e27f0';
const[moviesData,setMoviesData]=useState([])

  async function movies(){
    const ans = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`);
    const res=await ans.json()
    console.log(res.results)
    setMoviesData(res.results)
  } 
  useEffect(()=>{
    movies()
  },[])



  return (<> 
    

<div className='grid grid-cols-4 gap-5 px-[16vh] py-[4vh] bg-[#141414] sm:grid-cols-2 sm:px-[2vh]'>
{
  moviesData.map((item)=>(
    <Card key={item.id} data={item}/>
  ))
}
</div>


    </>)
}

export default Tv