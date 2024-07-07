import React, { useState,useEffect, useContext } from 'react'
import logo from '../assets/Logo.svg'
import { NavLink, useLocation,useNavigate } from 'react-router-dom'
import { IoMdSearch  } from "react-icons/io";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { SearchContext } from '../../context/Context';



function Navbar() {

const[nav,setNav]=useState(false)
const {searchInput,setSearchInput}=useContext(SearchContext)
const location = useLocation();

const search=useNavigate()

function handleSearch(){
  console.log(searchInput)
  search('/search')
}

useEffect(() => {
    setNav(false);
  }, [location]);



function handleNav(){
    setNav(!nav)
}


useEffect(() => {
  if (nav) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [nav]);


  return ( <> 
    <div className='flex justify-between items-center bg-[#141414] text-[#ffffff] py-[4vh] px-[12vh] w-full md:px-[2vh] md:gap-10 '>
 
 <div className='w-[15%] md:w-[40%] sm:w-[50%] '>
 <img src={logo} alt="" className='w-full' />
 </div>

<ul className='flex gap-5 text-lg border-[#1f1f1f] border-2 px-6 py-3  rounded-xl items-center md:py-2 md:px-2 md:text-sm sm:hidden'>
<NavLink to="/" className={({isActive})=> isActive? ' px-5 py-2 rounded-xl bg-[#1a1a1a]': ' text-[#727272] transition duration-500 ease-in-out hover:scale-110 hover:bg-[#1a1a1a] px-5 py-2 rounded-xl hover:text-white '}>Home</NavLink>
<NavLink to="/movies"  className={({isActive})=> isActive? ' px-5 py-2 rounded-xl bg-[#1a1a1a]': ' text-[#727272] transition duration-500 ease-in-out hover:scale-110 hover:bg-[#1a1a1a] px-5 py-2 rounded-xl hover:text-white'}>Movies</NavLink>
<NavLink to="/tv" className={({isActive})=> isActive? ' px-5 py-2 rounded-xl bg-[#1a1a1a]': ' text-[#727272] transition duration-500 ease-in-out hover:scale-110 hover:bg-[#1a1a1a] px-5 py-2 rounded-xl hover:text-white'}>TV</NavLink>
<NavLink to="/subcription" className={({isActive})=> isActive? ' px-5 py-2 rounded-xl bg-[#1a1a1a]': ' text-[#727272] transition duration-500 ease-in-out hover:scale-110 hover:bg-[#1a1a1a] px-5 py-2 rounded-xl hover:text-white'}>Subcription</NavLink>
</ul>

<div className='flex items-center w-[20%] md:w-[40%] sm:w-[70%]'>
    <input type="search" placeholder='Enter movie or tv shows..' className='bg-[#F3F3F3] text-[#141414]  rounded-s-lg pl-3 w-full py-2  sm:text-xs ' onChange={(e)=>{setSearchInput(e.target.value)}}  />
    <button className='bg-[#E60000] p-1 rounded-e-lg sm:py-[1px]' onClick={handleSearch}><IoMdSearch size={30} /> </button>
</div>


<div className='hidden sm:block'>

   
 <button onClick={handleNav}>   {nav? <RxCross2 size={30} /> : <HiBars3CenterLeft size={30} />} </button>
 
</div>

    
</div>


<div> 

<ul className={ nav? 'absolute flex flex-col bg-black w-[100%] h-full px-[4vh] gap-5 py-5 text-xl transition ease-in-out duration-700 z-50': 'fixed left-[-100%]'}>
<NavLink to="/" className={({isActive})=> isActive? 'text-[#ffffff] bg-[#1a1a1a] py-2 px-5 rounded-xl': ' text-[#727272] hover:text-[#ffffff] hover:bg-[#1a1a1a] hover:py-2 hover:px-5 hover:rounded-xl '}>Home</NavLink>
<NavLink to="/movies"  className={({isActive})=> isActive? 'text-[#ffffff]  bg-[#1a1a1a] py-2 px-5 rounded-xl': '  text-[#727272] hover:text-[#ffffff] hover:bg-[#1a1a1a] hover:py-2 hover:px-5 hover:rounded-xl '}>Movies</NavLink>
<NavLink to="/tv" className={({isActive})=> isActive? 'text-[#ffffff]  bg-[#1a1a1a] py-2 px-5 rounded-xl': '  text-[#727272] hover:text-[#ffffff] hover:bg-[#1a1a1a] hover:py-2 hover:px-5 hover:rounded-xl'}>TV</NavLink>
<NavLink to="/subcription" className={({isActive})=> isActive? 'text-[#ffffff]  bg-[#1a1a1a] py-2 px-5 rounded-xl': '  text-[#727272] hover:text-[#ffffff] hover:bg-[#1a1a1a] hover:py-2 hover:px-5 hover:rounded-xl'}>Subcription</NavLink>
</ul>

</div>



</>)
}

export default Navbar