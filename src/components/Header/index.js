import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem`}}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const Header = () => (
  <div
    style={{
      background: 'dodgerblue',
      marginBottom: '1.5rem',
      borderBottom: 'thick solid whitesmoke',
      boxShadow: '3px 3px 10px 0px #888888',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1rem 1rem',
        maxWidth: '960px',
        overflow: 'hidden',
      }}
    >
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >

         <svg width="280" height="80">
          <text x="7" y="63" className={styles.logo} id={styles.first}>
              J.F.D.III
          </text>
          <text x="13" y="67" className={styles.logo} id={styles.second}>
              J.F.D.III
          </text>          
          <text x="10" y="65" className={styles.logo} id={styles.third}>
              J.F.D.III
          </text>
        </svg>

        </Link>
      <ul className={styles.topnav}>
        <ListLink to="/work/">
        Work
        </ListLink>
        <ListLink to="/about/">Me</ListLink>
      </ul>
    </div>
  </div>
)

export default Header
