import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero";
import Image from "../components/Image";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
      <Image />
  </Layout>
)

export default IndexPage
