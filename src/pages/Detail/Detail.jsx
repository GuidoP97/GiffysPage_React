import React from 'react'
import Gif from '../../components/Gif/Gif.jsx';
import useGlobalGifs from '../../hooks/useGlobalGifs'

export default function Detail ({ params }) {
  const gifs = useGlobalGifs()

  const gif = gifs.find(singleGif => singleGif.id === params.id)

  return <Gif {...gif} />
}