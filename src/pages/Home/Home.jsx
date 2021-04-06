import React, { useState } from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import useGifs from '../../hooks/useGifs'

const POPULAR_GIFS = ["Matrix","Venezuela", "Chile", "Colombia", "Ecuador"]

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [ path, pushLocation ] =  useLocation()
  const { loading, gifs } = useGifs()

  const handleSubmit = event => {
    event.preventDefault()
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }
  
  const handleChange = event => {
    setKeyword(event.target.value)
  }

  // console.log(path, loading);
  if(loading && path === null) {
    console.log('milagro');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          defaultValue={keyword} 
          onChange={handleChange}
          placeholder="Search a gif here ..."
          type="text" 
        />
        <button>Buscar</button>
      </form>
      <h3 className="App-title">Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
      {POPULAR_GIFS.map((popularGif) => (
        <li key={popularGif}>
          <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
        </li>
      ))}
      </ul>
    </>
  )
}