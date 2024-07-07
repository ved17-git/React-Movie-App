import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'
import Movie from './Components/Movies/Movie'
import Tv from './Components/Tv/Tv'
import Info from './Components/Info/Info'
import Search from './Components/Search/Search'
import { SearchContext } from '../context/Context'
import Subcription from './Components/Subcription/Subcription'
import Footer from './Components/Footer/Footer'


function App() {
  const[searchInput,setSearchInput]=useState("")

return (
<>

<SearchContext.Provider value={{searchInput,setSearchInput}}>

<BrowserRouter>
<Navbar/>
<Routes>


<Route path='/' element={<Home/>} />
<Route path='/movies' element={<Movie/>} />
<Route path='/tv' element={<Tv/>} />
<Route path='/subcription' element={<Subcription/>} />
<Route path='/:id' element={<Info/>}/>
<Route path='/search' element={<Search/>}></Route>


</Routes>
<Footer/>
</BrowserRouter>


</SearchContext.Provider>


</>
  )
}

export default App
