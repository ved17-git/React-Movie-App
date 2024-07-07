import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'


function Info() {

    const {id}=useParams()
    console.log(id)
    const[data,setData]=useState([])

    async function info(){
        const ansInfo=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=91a7bc615e78124694205aa0a77e27f0`)
        const resInfo=await ansInfo.json()
        console.log(resInfo)
        setData(resInfo)
    }

    useEffect(()=>{
        info()
    },[])

  return (<> 


<div className='bg-[#141414] '>

<div className='relative px-[16vh] py-[4vh] md:px-[6vh] sm:px-[2vh]'>
<img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />

<div className='w-[20%]  '>
<img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" />
</div>

</div>


</div>


    </>)
}

export default Info