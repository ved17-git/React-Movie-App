import React, { useEffect, useState } from 'react';
import Backdrop from './Backdrop';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDots from './CustomDots';
import Card from './Card';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar';

function Home() {
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [tv, setTv] = useState([]);
  const[topRated,setTopRated]=useState([])


  const apiKey = '91a7bc615e78124694205aa0a77e27f0';

  async function getUpcoming() {
    const ans = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`);
    const res = await ans.json();
    console.log(res.results);
    setUpcoming(res.results);
  }

  async function getPopular() {
    const ansp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    const resp = await ansp.json();
    console.log(resp.results);
    setPopular(resp.results);
  }

  async function getTV() {
    const anstv = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`);
    const restv = await anstv.json();
    console.log(restv.results);
    setTv(restv.results);
  }

  async function getTopRated() {
    const anstr = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
    const restr = await anstr.json();
    console.log(restr.results);
    setTopRated(restr.results);
  }

  useEffect(() => {
    getUpcoming();
    getPopular();
    getTV()
    getTopRated()
  }, []);

  const responsiveUpcoming = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const responsivePopular = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (<> 
   
   <div className='bg-[#141414] h-full'>

    <div className=''>
      <Carousel responsive={responsiveUpcoming} showDots={true} customDot={<CustomDots />} >
        {upcoming && upcoming.map((item) => (
          <Backdrop key={item.id} data={item} />
        ))}
      </Carousel>
      </div>


   <div className=' px-[16vh] relative mt-10 sm:px-[1vh] md:px-[3vh]'>
    <p className='text-white text-xl font-semibold pl-2'>Popular</p> <br />
      <Carousel responsive={responsivePopular} showDots={false} customDot={<CustomDots />}>
        {popular && popular.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Carousel>
    </div>


    <div className=' px-[16vh] relative mt-10 sm:px-[1vh] md:px-[3vh]'>
    <p className='text-white text-xl font-semibold pl-2'>TV SHOWS</p> <br />
      <Carousel responsive={responsivePopular} showDots={false} customDot={<CustomDots />}>
        {tv && tv.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Carousel>
    </div>


    <div className=' px-[16vh] relative mt-10 sm:px-[1vh] md:px-[3vh] pb-8'>
    <p className='text-white text-xl font-semibold pl-2'>Top Rated</p> <br />
      <Carousel responsive={responsivePopular} showDots={false} customDot={<CustomDots />}>
        {topRated && topRated.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Carousel>
    </div>
 
   

    </div>



    </>
  );
}

export default Home;
