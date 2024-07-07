import React, { useEffect, useState,useContext } from 'react';
import SearchCard from './SearchCard';
import Navbar from '../Navbar';
import { SearchContext } from '../../../context/Context';

function Search() {
  const [searchData, setSearchData] = useState([]);
  const {searchInput}=useContext(SearchContext)
  console.log(searchInput)

  const url = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=91a7bc615e78124694205aa0a77e27f0`;

  async function getSearch() {
    const ans = await fetch(url);
    const res = await ans.json();
    console.log(res.results);
    setSearchData(res.results);
  }

  useEffect(() => {
    getSearch();
  }, [searchInput]);

  return ( <>
   

    <div className='grid grid-cols-4 gap-5 px-[16vh] py-[4vh] bg-[#141414] sm:grid-cols-2 sm:px-[2vh]'>
      {searchData.length > 0 && searchData.map((item) => (
        <SearchCard key={item.id} data={item} />
      ))}
    </div>


    </>);
}

export default Search;
