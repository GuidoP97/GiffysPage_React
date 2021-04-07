import React, { useState } from "react"
import { useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import useGifs from '../../hooks/useGifs'
import Category from '../../components/Category/Category'

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
        <button>Buscar</button>
        <input 
          defaultValue={keyword} 
          onChange={handleChange}
          placeholder="Search a gif here ..."
          type="text" 
        />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <Category
            name="Categorias populares"
            options={POPULAR_GIFS}
          />
          <Category
            name="Mascotas"
            options={['Perros', 'Gatos', 'Hamster']}
          />
        </div>
      </div>
    </>
  )
}