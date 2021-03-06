import { useState, useEffect, useContext } from "react"
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext.jsx'

export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  // const [gifs, setGifs] = useState([])
  const {gifs, setGifs} = useContext(GifsContext)
  
  useEffect(function () {
    setLoading(true)
    // recuperamos la keyword de localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    getGifs({ keyword: keywordToUse })
    .then(gifs => {
      setGifs(gifs)
      setLoading(false)
      // Guardamos la keyword en localStorage
      localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, setGifs])

  return {loading, gifs}
}