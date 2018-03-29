import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Strip from '../components/Strip';
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
    <Strip />
    <div
      style={{
        margin: '0 auto',
        maxWidth: '85%',
        padding: '2rem 1.45rem .5rem',
        paddingTop: '1rem',
        backgroundColor: 'WhiteSmoke',
        borderRadius: '0px 0px 10px 10px',
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
