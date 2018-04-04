import React from 'react'
import Link from 'gatsby-link'
import containerStyle from '../components/Container/container.module.css'
import Container from '../components/Container'
import Skyline from '../components/Skyline'
import avi from '../components/Avatar/avatar.module.css'
import avatar from '../img/avatar.jpg'

const IndexPage = () => (
  <div>
    <Container className={containerStyle.containerNoPad}>
    <div className='flex-container flex-column'>
    <div>
        <h3 className="HeroTextHighlight">Hello! My name is</h3>
    </div>
    <div>
        <h1 className="HeroText">Joe DePumpo.</h1>
    </div>
    <div>
        <h3 className="HeroTextHighlight">I am a</h3>
    </div>
    <div>
    <h1  className="HeroText">web developer</h1>
    </div>
    <div><h3 className="HeroTextHighlight">based in Washington, D.C.</h3></div>
        <div><Skyline /></div>
        </div>
    </Container>
      <Container className={containerStyle.blue}>
          <h3 className={containerStyle.whiteText}>I am interested in:</h3>
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
