import React from 'react'
import style from './Style/center-style.module.css'

const Center = ({topic,fees,value,imgpath}) => {//imgpath
  // console.log(imgpath);//objectprops={topic:''}
  // const {topic,fees}=props;//object destructuring
  return (
    <div className={style.midsection}>
      <h1>{topic}</h1>
      <p>price:{fees}</p>
      <button className={style.btn}>{value}</button>
      <img src={imgpath} alt="img" style={{width:'200px',height:'100px'}} />
    </div>
  )
}

export default Center
