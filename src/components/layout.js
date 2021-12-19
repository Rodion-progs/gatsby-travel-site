/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css";
import 'normalize.css';
import {Helmet} from "react-helmet";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Ubuntu:wght@400;500;700&display=swap"
                rel="stylesheet" />
        </Helmet>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
