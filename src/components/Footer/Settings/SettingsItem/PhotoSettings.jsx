import React, { Fragment } from 'react'
import s from './photosettings.module.scss'
import bg from  './01_small.jpg';
import bg2 from  './02_small.jpg';
import bg3 from  './03_small.jpg';
import { useDispatch } from 'react-redux';
import { changeBG } from '../../../../reduxTK/backgroundSlice';

function PhotoSettings() {
  const dispatch = useDispatch()
  
  const changeBackground = (e) => {
    dispatch(changeBG(e.currentTarget.innerText))
  }
     
  return (
    <Fragment>
      <h2>Photos</h2>
      <div className={s.photosGreed}>
        <div className={s.photoItem} style={{backgroundImage: `url(${bg})`}} onClick={changeBackground}>01</div>
        <div className={s.photoItem} style={{backgroundImage: `url(${bg2})`}} onClick={changeBackground}>02</div>
        <div className={s.photoItem} style={{backgroundImage: `url(${bg3})`}} onClick={changeBackground}>03</div>
        <div className={s.photoItem} onClick={changeBackground}>default</div>
      </div>
      
    </Fragment>
  )
}

export default PhotoSettings