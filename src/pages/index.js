import React from "react"
import { Link } from "gatsby"

import SiteLayout from "../components/siteLayout"
// import Image from "../components/image"
import SEO from "../components/seo"
import MainHero from "../components/MainHero"
import Usp from "../components/Usp"
import Principles from "../components/Principles"
import ReviewSlider from "../components/ReviewSlider"
import FeaturedBlogs from "../components/FeaturedBlogs"
import LocationMap from "../components/LocationMap"

const IndexPage = () => (
  <SiteLayout>
    <SEO title="Home" />
    <MainHero />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    <Usp />
    <Principles />
    <ReviewSlider />
    <FeaturedBlogs />
    <LocationMap />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </SiteLayout>
)

export default IndexPage
