import React from 'react'
import Link from 'gatsby-link'
import styles from './container.module.css'

const HeroContainer = props =>
<div className={styles.container}>
<div className={styles.whiteSpace}>
{props.children}
</div>
</div>

export default HeroContainer