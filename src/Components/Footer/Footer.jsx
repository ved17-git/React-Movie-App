import React from 'react'
import logo from  './Logo.svg'

function Footer() {
  return ( <> 


<div className='text-white flex justify-between px-[10vh]  bg-black py-16 md:flex-col gap-11 r sm:px-[6vh] w-full '>

<div className=''>
<h1 className='text-2xl font-semibold'>Home</h1>
<ul className='text-[#999999] mt-4 space-y-2'>
    <li>Categories</li>
    <li>Devices</li>
    <li>Pricing</li>
    <li>FAQ</li>
</ul>
</div>


<div>
<h1 className='text-2xl font-semibold'>Movies</h1>
<ul className='text-[#999999] mt-4 space-y-2'>
    <li>Gernes</li>
    <li>Trending</li>
    <li>New Release</li>
    <li>Popular</li>
</ul>
</div>


<div>
<h1 className='text-2xl font-semibold'>TV</h1>
<ul className='text-[#999999] mt-4 space-y-2'>
<li>Gernes</li>
    <li>Trending</li>
    <li>New Release</li>
    <li>Popular</li>
</ul>
</div>



<div>
<h1 className='text-2xl font-semibold'>Subcriptions</h1>
<ul className='text-[#999999] mt-4 space-y-2'>
    <li>Plans</li>
    <li>Features</li>
  
</ul>
</div>

<div>
    <img src={logo} alt="" />
</div>
        
        

</div>




    </>)
}

export default Footer