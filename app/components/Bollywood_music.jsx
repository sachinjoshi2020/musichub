"use server";
import React from 'react'
import style from '@/app/styles/musiclist.module.css';
const Bollywood_music = (props) => {
  return (
    <div className={style.card}>{props.title}</div>
  )
}

export default Bollywood_music