import { useContext } from 'react'
import GifsContext from '../context/GifsContext.jsx'

export default function useGlobalGifs () {
  return useContext(GifsContext).gifs
}