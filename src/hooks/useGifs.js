import { useState, useEffect } from "react"
import getGifs from '../services/getGifs'

function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])
  
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
  }, [keyword])

  return {loading, gifs}
}

export default useGifs