import React, { Fragment } from 'react'
import s from './photosettings.module.scss'

function PhotoSettings() {
  const photoQantity = 20;
  const photoItems = () => {
    for (let index = 0; index < photoQantity; index++) {
      return (
        <div className={s.photoItem}></div>
      )
      
    }

  }
  return (
    <Fragment>
      <h2>Photos</h2>
      <div className={s.photosGreed}>
        <div className={s.photoItem}></div>
        <div className={s.photoItem}></div>
        <div className={s.photoItem}></div>
        <div className={s.photoItem}></div>
        <div className={s.photoItem}></div>
        <div className={s.photoItem}></div>
        <div className={s.photoItem}></div>
        <div className={s.photoItem}></div>
        <div className={s.photoItem}></div>
        <div className={s.photoItem}></div>
        <div className={s.photoItem}></div>
        <div className={s.photoItem}></div>
{/* {photoItems} */}
      </div>
      
    </Fragment>
  )
}

export default PhotoSettings