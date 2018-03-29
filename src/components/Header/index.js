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
      borderBottom: 'thick solid WhiteSmoke'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1rem 1%',
        maxWidth: '75%',
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

         <svg width="260" height="80">
          <text x="6" y="62"
            style={{
              fontFamily:'Roboto',
              fontWeight: 'bold',
              fontSize: 70,
              fill: '#7fb800',
            }}
            >
              J.F.D III
          </text>
          <text x="14" y="68"
            style={{
              fontFamily:'Roboto',
              fontSize: 70,
              fontWeight: 'bold',
              fill: '#ffb400',
            }}
            >
              J.F.D III
          </text>          
          <text x="10" y="65"
            style={{
              fontFamily:'Roboto',
              fontSize: 70,
              fontWeight: 'bold',
              fill: 'white',
            }}
            >
              J.F.D III
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
