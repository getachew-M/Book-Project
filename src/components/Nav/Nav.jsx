import React from 'react';
import { Link} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.nav}>
       <img style={{width:'200px', height:'70px'}}
         src='./bookLogo.jpg' alt=''/>
        
     <ul className={styles.ul}>
     <Link to='/'>
      <li>Home</li>
      </Link>
      <Link to='/about'>
      <li>About</li>
      </Link>
      <Link to='/contact'>
      <li>Contact</li>
      </Link>
     </ul>
    </div>
  )
}

export default Nav
