import React, { useEffect, useState } from 'react'

export default function Card() {
  const [images, setImages] = useState(['', '', '', ''])

  useEffect(() => {
    fetch('http://shibe.online/api/shibes?count=4&urls=true')
      .then(res => res.json())
      .then(data => {
        setImages(data)
      })
  },[])

  return (
    <section className='bg-slate-900 h-1/4 w-1/4 rounded-2xl m-5 p-4 [&>img]:rounded-xl'>
      <img className='w-full mb-2' src={images[0]} alt="" />
      <div className='flex flex-row justify-between gap-2 w-full [&>img]:w-1/3 [&>img]:object-cover [&>img]:rounded-xl'>
        <img src={images[1]} alt="" />
        <img src={images[2]} alt="" />
        <img src={images[3]} alt="" />
      </div>
    </section>
  )
}