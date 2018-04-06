import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import containerStyle from '../components/Container/container.module.css'

const Work = () => (
  <div>
 <Container>
 <span className="pageTitle">Experience</span>
</Container>
<Container className={containerStyle.blue + ' ' + containerStyle.whiteText + ' ' + containerStyle.containerRounded}>
       <p>You can find a <Link to="#">copy of my resume</Link> here (PDF).</p>
  </Container>
  </div>
)

export default Work
