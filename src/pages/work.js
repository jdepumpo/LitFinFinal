import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import containerStyle from '../components/Container/container.module.css'
import globe from'../img/globe.png'
import chrac from '../img/chrac.jpg'

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
      <WorkTables title='Web Developer &amp; Contributing Writer' company='The Globe GWU' date='October 2015 — Present' city='Washington, D.C.' avi={globe}> 
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
      <WorkTables title='Editor &amp; Research Intern' company='Cambodian Human Rights Action Committee' date='May 2016 — August 2016' city='Phnom Penh, Cambodia'> 
          <ul>
            <li>
Editor of The Unheard Stories of Civil Parties Participating in the Extraordinary Chambers in the Courts of Cambodia which tells the stories of 30 Khmer Rouge victims who provided testimony to the Tribunal. It was recognized by the Court as an official reparation to and the book was distributed to every public library and public school in Cambodia.
            </li>
            <li>
Assisted documenting interviews with Khmer Rouge civil party victims in order to collect testimony for the Court and to ensure the accuracy of the English language translations of the storybook.
            </li>
            <li>
Assisted CHRAC’s legal adviser as she represented more than 50 civil party victims at the Tribunal, including documenting live interviews in English, and working with official Court records.
            </li>
           </ul>
      </WorkTables>
      <WorkTables title='Development Intern' company='BroadcastVision' date='June 2015 — July 2015' city='Denver, CO'> 
          <ul>
            <li>
Identified areas where legacy analog hardware could be replaced with smaller, Wi-Fi enabled digital hardware. These efforts helped spawn the creation of an entirely new product line. This new product accomplished what once took multiple bulky, interference-prone analog transmitters and recievers, in a single, pocket-sized device.
            </li>
            <li>
This new product line became the best-seller of the AudioFetch division, and eliminated a number of installation headaches and customer pain points.
            </li>
            <li>
            Designed new cost effective packaging for AudioFetch products that complied with labeling laws and regulations.
            </li>
          </ul>
      </WorkTables>
  </ul>
</Container>
  </div>
)

export default Work
