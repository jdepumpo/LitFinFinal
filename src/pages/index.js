import React from 'react'
import Link from 'gatsby-link'
import containerStyle from '../components/Container/container.module.css'
import Container from '../components/Container'
import dc from '../img/DC.svg'

const IndexPage = () => (
  <div>
    <Container>
        <h3>I'm a</h3>
        <span style={{fontFamily:'Cutive Mono', fontSize:'4rem',}}>
        web developer
        <span style={{fontFamily:'Cutive Mono', fontSize:'4rem',}} className="blinking-cursor">|</span>
        </span>
        <div className='flex-container'>
        <div><h3>based in Wahsington, D.C.</h3></div>
        <div><img src={dc} style={{objectFit: 'contain', maxHeight:'100%', maxWidth: '100%',}} /></div>
        </div>
    </Container>
      <Container className={containerStyle.red}>
          <h3>interested in</h3>
            <details open>
              <summary>Front-End Development</summary>
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
        </Container>
  </div>

)

export default IndexPage
