import { HashRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './components/Home'
import EventInfo from './components/EventInfo'
import { useState, useEffect } from 'react'
import FilmContext from './contexts/FilmContext'
import FilmDetails from './components/FilmDetails'
import Bios from './components/Bios'

function App() {

    const [filmDetails, setFilmDetails] = useState([])

    useEffect(() => {
        fetch("https://cs571api.cs.wisc.edu/rest/f25/bucket/details", {
            method: "GET",
            headers: {
                "X-CS571-ID": CS571.getBadgerId(),
            }
        })
        .then(res => res.json())
        .then(data => {
            setFilmDetails(data.results["d6e3e6a9-6c20-4860-b413-b4652a92478d"])
        })
    },[])

  return <div>
    <FilmContext.Provider value={filmDetails}>
    <HashRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/event' element={<EventInfo/>}/>
        <Route path='/details' element={<FilmDetails/>}/>
        <Route path='/bios' element={<Bios/>}/>
      </Routes>
      </div>
  </HashRouter>
  </FilmContext.Provider>
  </div>
  

  
    
  
}

export default App
