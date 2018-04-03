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
      background: '#e55934',
      marginBottom: '1.5rem',
      borderBottom: 'thick solid WhiteSmoke',
      boxShadow: '3px 3px 10px 0px #888888',
      position: 'sticky',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1rem 1%',
        maxWidth: '80%',
        overflow: 'auto',
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
          <text x="6" y="62"
            style={{
              fontFamily:'Monoton',
              fontSize: 70,
              fill: '#7fb800',
            }}
            >
              J.F.D.III
          </text>
          <text x="14" y="68"
            style={{
              fontFamily:'Monoton',
              fontSize: 70,
              fill: '#ffb400',
            }}
            >
              J.F.D.III
          </text>          
          <text x="10" y="65"
            style={{
              fontFamily:'Monoton',
              fontSize: 70,
              fill: 'white',
            }}
            >
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
