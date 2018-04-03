import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Joe DePumpo III"
      meta={[
        { name: 'description', content: 'Personal Website' },
        { name: 'keywords', content: 'Blog, Website, Portfolio, Resume,' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        marginBottom: '2.5rem',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
