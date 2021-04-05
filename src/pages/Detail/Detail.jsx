import React, { useContext } from 'react'
import Gif from '../../components/Gif/Gif.jsx';
import GifsContext from '../../context/GifsContext.jsx'

export default function Detail ({ params }) {
  const {gifs} = useContext(GifsContext)
  // console.log({gifs});

  const gif = gifs.find(singleGif => singleGif.id === params.id)

  // console.log(gif);

  // console.log(params.id)
  return <Gif {...gif} />
}