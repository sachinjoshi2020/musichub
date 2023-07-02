'use server';
import style from '@/app/styles/musiclist.module.css';

const Punjabi_music = (props) => {
  return (
    <div className={style.card}>{props.title}</div>
  )
}

export default Punjabi_music