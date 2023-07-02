"use server";
import React from 'react'
import style from '@/app/styles/musiclist.module.css';
const Hariyanvi_music = (props) => {
  return (
    <div className={style.card}>{props.title}</div>
  )
}

export default Hariyanvi_music