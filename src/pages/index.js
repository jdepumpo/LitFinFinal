import React from 'react'
import Link from 'gatsby-link'
import avatar from '../img/avatar.jpg'
import styles from '../components/Avatar/avatar.module.css'
import Card from '../components/Card'

const IndexPage = () => (
  <div>
<img className={styles.avatar} src={avatar} alt="Avatar" />
    <h3>Hey, I'm Joe!</h3>
    <p>Welcome to my little corner of the web. I'm using this space to create a central repository of my thoughts, interests, and experiences. You'll find a brief description of my interests below, but for a more comprehensive look at my background and experiences, be sure to <Link to="/work/">check out my resume</Link>.</p>
  
  </div>

)

export default IndexPage
