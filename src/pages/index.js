import React from 'react'
import Link from 'gatsby-link'
import styles from '../components/Avatar/avatar.module.css'
import HeroContainer from '../components/HeroContainer'

const IndexPage = () => (
  <div>
      <HeroContainer>
        <h3>I'm a</h3>
        <span style={{fontFamily:'Monoton', fontSize:'4rem',}}>
        web 
        </span>
        <br />
        <span style={{fontFamily:'Monoton', fontSize:'4rem',}}>
        developer
        </span>
        <h3>interested in</h3>
        <details>
          <summary>
          Front-End Development
          </summary>
          <p>Using HTML, CSS, and Javascript, I build fast, interactive websites.</p>
        </details>
        <details>
          <summary>UI/UX Design</summary>
          <p>Planning and iterating a site's structure and layout. Once the proper information architecture is in place, I design the visual layer to create a beautiful user experience.</p>
        </details>
        <details>
          <summary>Branding</summary>
          <p>While I focus on interactive development, occasionally I dabble in branding and collateral design.</p>
        </details>
      </HeroContainer>
  </div>

)

export default IndexPage
