import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import containerStyle from '../components/Container/container.module.css'
import globe from'../img/globe.png'

const WorkTables = props =>
  <li style={{display: 'inline',}}>
   {/* <img className={avi.avatar+' '+avi.small} src={props.smallAvi} alt={props.smallAviAlt} /> */}
    <img src={props.avi} />
    <h3>{props.title}</h3>
    <h4>{props.company}  |  {props.date}  |  {props.city}</h4>
      <p style={{ padding:'0 0 1rem 0', margin:'1rem', borderBottom: '2px solid lightGrey'}}>{props.children}</p>
  </li>

const Work = () => (
  <div>
  <Container>
    <span className="pageTitle">Experience</span>
  </Container>
  <Container className={containerStyle.blue + ' ' + containerStyle.whiteText + ' ' + containerStyle.containerRounded}>
          <h3 className='.pagetitle'>My resume.</h3>
          <p>Download a <Link to="#">PDF copy</Link>.</p>
          <span>GitHub icon placeholder</span>
          <span>LinkedIn icon placeholder</span>
     </Container>
    
 <Container>
    <ul style={{padding: '1rem 1rem',}}>
      <WorkTables title='Web Developer &amp; Contributing Writer' company='The Globe GWU' date='May 2016 — August 2016' city='Phnom Penh, Cambodia' avi={globe}> 
          <b>As a web developer:</b>
            <ul>
              <li>
I redesigned and relaunched The Globe’s <Link to='http://theglobegwu.com/'>website</Link> with Wordpress which increased site viewership by a factor of four, increased blog and journal article submissions, and continued to increase social media interactions.
              </li>
              <li>
Created and implemented a biweekly email newsletter, which now delivers The Globe’s content, events, and important announcements to hundreds of subscribers and is a large contributor of site traffic.
              </li>
              <li>
Planned and implemented The Globe’s first online paid advertising program across social media platforms which met its targets on time and under budget, led to the largest number of journal submissions in The Globe’s history, and the highest attendance ever recorded at our journal release event.
              </li>
            </ul>
            <b>As a contributing writer:</b>
            <ul>
              <li>
I continued honing my research, analysis, writing, and editing skills in order to write engaging international affairs analyses, on wide ranging subjects including Burmese politics, Thai politics, and the Ebola response.
            </li>
            <li>
My articles regularly had the highest engagement rates on The Globe’s website and social media. 
            </li>
            </ul>
      </WorkTables>
      <WorkTables title='Editor &amp; Research Intern' company='Cambodian Human Rights Action Committee'> 
          Coming.
      </WorkTables>
      <WorkTables title='Development Intern' company='BroadcastVision'> 
          Coming.
      </WorkTables>
  </ul>
</Container>
  </div>
)

export default Work
