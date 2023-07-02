"use server";
import React from 'react'
import style from '@/app/styles/music.module.css';
import Punjabi_music from '../components/Punjabi_music'
import Bollywood_music from '../components/Bollywood_music'
import Hariyanvi_music from '../components/Hariyanvi_music'
import Nav from '../components/Nav';
const page = () => {
  return (
   <>
    <Nav/>
    <input type='file' accept='mp3/audio' />
    <section className={style.music_distributed}>
      <Bollywood_music className ={style.card} title ="Bollywood"/>
      <Hariyanvi_music className ={style.card} title ="Hariyanvi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
      <Punjabi_music className ={style.card} title = "Punjabi"/>
    </section>
   </>
  )
}

export default page