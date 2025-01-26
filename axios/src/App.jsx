import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from './components/Card';

function App() {
  const [data, setData] =useState([]);

  const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

  const getMovieData = async()=>{
    try{
      const res = await axios.get(API)
      console.log(res.data.Search);
      setData(res.data.Search);
      
    }catch(error){
        console.log(error);
        
    }
  }

  useEffect(()=>{
    getMovieData();
  },[])

  return (
    <>
      {
        data.map((currElem)=>{
          return <Card key={currElem.imdbID} movieData={currElem}/>
        })
      }
    </>
  )
}

export default App
