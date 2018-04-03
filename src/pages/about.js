import React from 'react'
import Link from 'gatsby-link'
import code from '../img/code.png'
import pin from '../img/pin.png'
import pen from '../img/pen.png'
import avi from '../components/Avatar/avatar.module.css'
import avatar from '../img/avatar.jpg'
import HeroContainer from '../components/HeroContainer'

const Interest = props =>
  <li style={{display: 'inline',}}>
    <img className={avi.avatar+' '+avi.small} src={props.smallAvi} alt={props.smallAviAlt} />
    <h3>{props.title}</h3>
      <p style={{ paddingBottom:'1rem', marginBottom:'1rem', borderBottom: '2px solid lightGrey'}}>{props.children}</p>
  </li>

const About = () => (
  <div>
    <span className="pageTitle">About Me</span>
     <HeroContainer>
          <img className={avi.avatar+' '+avi.big} src={avatar} alt="Avatar" />
          <h3 className='.pagetitle'>Hey, I'm Joe!</h3>
          <p>Welcome to my little corner of the web. I'm using this space to create a central repository of my thoughts, interests, and experiences. You'll find a brief description of my interests below, but for a more comprehensive look at my background and experiences, be sure to <Link to="/work/">check out my resume</Link>.</p>
     </HeroContainer>
    
    <h2>My Interests</h2>

    <ul style={{padding: '.5rem 2rem',}}>
      <Interest smallAvi={code} title='Development'> 
      When I wrote my first HTML string sometime in grade school, I was amazed by the realization that you could create whatever you wanted and display it to the world. Ever since, I've challenged myself to continue learning and developing my skills. First that came in the form of basic HTML and CSS, then Wordpress development, and now more advanced Javascript. This website is a continuation of that learning - I'm building it to learn how to use React and it's component-based approach.
      </Interest>
      <Interest smallAvi={pin} title='Politics'> 
      When I was 15 I traveled to Thailand with my family. I didn't realize it at the time, but this experience would have a lasting impact on my future. I caught a glimpse of a vibrant country with a profound culture and history. With time I would come to realize that the whole of Southeast Asia is replete with these elements. Now that I'm persuing a Political Science degree at The George Washington University, I've studied and written about the fascinating and sometimes troubled history of politics, democracy, and nationalism in the region. Further, I've been able to intern in Cambodia, research in Myanmar, and visit every mainland country except Laos (it's on the bucket list!).
      </Interest>
      <Interest smallAvi={pen} title='Communication'> 
      I've always enjoyed the art of effective written and oral communication. During my time as a competitive debater and extemporaneous speaker I developed and practiced a vast array of communications skills - I was constantly thinking on my feet, adapting to quickly changing circumstances, and building effective argumentation structure. In terms of written work, I edited the English-language sections of a book containing the stories of thirty Khmer Rouge survivors which ultimately was recognized by the Khmer Rouge Tribunal and was distributed to every public school and library in the country. Further, I assisted with and documented interviews of Khmer Rouge survivors with a team of Cambodian lawyers.
      </Interest>
  </ul>

  </div>
)

export default About
