/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import NewsletterFooter from "./NewsletterFooter";
import FooterMenu from "./FooterMenu"
import NavBarMenu from "./Navbar"

const SiteLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      carports {
        menuses {
          id
          menuName
          parentId
          parentName
          status
        }
      }
    }
  `)
  const menus = data.carports.menuses
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <NavBarMenu menu={menus} />
        <main class="main">
          {children}
        <NewsletterFooter />
        </main>
        <FooterMenu />
      </div>
    </>
  )
}

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout
