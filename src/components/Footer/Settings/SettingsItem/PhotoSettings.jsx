import React, { Fragment, useEffect } from 'react'
import s from './photosettings.module.scss'
import bg from  './01_small.jpg';
import bg2 from  './02_small.jpg';
import bg3 from  './03_small.jpg';
import { useDispatch } from 'react-redux';
import { changeBG } from '../../../../reduxTK/backgroundSlice';

function PhotoSettings() {
  const dispatch = useDispatch()

  const backgrounds = ["01","02","03"];
  
  // const photoItems = backgrounds.map((p) => {
  //   return (
  //     <div className={s.photoItem}
  //      style={{backgroundImage: `url("/static/media/${p}_small.d65eef03f30c62cbef28.jpg"))`}}
  //      >
  //       {p}</div>
  //   )
  // })

 
  const changeBackground = (e) => {
    dispatch(changeBG(e.currentTarget.innerText))
  }

  
     
  return (
    <Fragment>
      <h2>Photos</h2>
      <div className={s.photosGreed}>
        {/* {photoItems} */}
        <div className={s.photoItem} style={{backgroundImage: `url(${bg})`}} onClick={changeBackground}>01</div>
        <div className={s.photoItem} style={{backgroundImage: `url(${bg2})`}} onClick={changeBackground}>02</div>
        <div className={s.photoItem} style={{backgroundImage: `url(${bg3})`}} onClick={changeBackground}>03</div>
      </div>
      
    </Fragment>
  )
}

export default PhotoSettings