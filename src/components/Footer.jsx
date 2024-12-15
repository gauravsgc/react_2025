import React from 'react'
import styles from './Style/footer-style.module.css'
import background from '../assets/background.jpg';
const Footer = () => {
  return (
    <div>
      <img src={background} alt="background"  className={styles.img}/>
      <h1>@copy; by production india</h1>
      <address>gurgaon 2000000</address>
      <p style={{color:'#ffaabb',fontWeight:'bold',fontSize:'2em'}}>pincode 20001</p>
    
    <button className={styles.btn}>click1</button>
    <img src="img.jpg" alt="image"  className={styles.img}/>
    </div>
  )
}

export default Footer
