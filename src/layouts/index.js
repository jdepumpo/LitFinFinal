import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Banner from '../components/Banner';
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Banner />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.0875rem 1.45rem',
        paddingTop: '1rem',
        backgroundColor: 'WhiteSmoke',
        borderRadius: '0px 0px 10px 10px',
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
