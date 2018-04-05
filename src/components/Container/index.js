import React from 'react'
import Link from 'gatsby-link'
import containerStyle from './container.module.css'

const Container = props =>
<div className={containerStyle.container + ' ' + props.className}>
<div className={containerStyle.content}>
{props.children}
</div>
</div>

export default Container