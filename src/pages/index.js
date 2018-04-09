import React from 'react'
import Link from 'gatsby-link'
import containerStyle from '../components/Container/container.module.css'
import Container from '../components/Container'
import Skyline from '../components/Skyline'
import avi from '../components/Avatar/avatar.module.css'
import avatar from '../img/avatar.jpg'
import laptop from'../img/laptop.png'


const IndexPage = () => (
  <div>
    <Container className={containerStyle.containerNoPad}>
    <div className='flex-container flex-column'>
    <div>
        <h3 className="HeroTextHighlight">Hello! My name is</h3>
    </div>
    <div>
    <img className={avi.index+' '+avi.big} src={avatar} alt="Avatar" />
    </div>
    <div>
        <h2 className="pageTitleNoBorder" id="flex-container-bottom">Joe DePumpo.</h2>
    </div>
    <div>
        <h3 className="HeroTextHighlight">I am a</h3>
    </div>
    <div>
      <img src={laptop} className="flex-container" />
    </div>
    <div>
    <h2 className="pageTitleNoBorder">web developer</h2>
    </div>
    <div><h3 className="HeroTextHighlight">based in Washington, D.C.</h3></div>
  </div>
    <div className="flex-column"><Skyline /></div>
      </Container>
      <Container className={containerStyle.blue}>
          <h3 className={containerStyle.whiteText}>I am interested in:</h3>
            <details open>
              <summary>Front-End Development</summary>
              <p>I build beautiful, functional, and fast websites using HTML, CSS, and Javascript.</p>
            </details>
            <details>
              <summary>UI/UX Design</summary>
              <p>Laying out and designing each component and it's functionality is a vital part of developing web apps.</p>
            </details>
            <details>
              <summary>Branding</summary>
              <p>While I mainly focus on interactive development, occasionally I dabble in branding and collateral design.</p>
            </details>
        </Container>
  </div>

)

export default IndexPage
