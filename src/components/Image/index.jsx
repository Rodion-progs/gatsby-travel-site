import React from "react"

// import Layout from "../../components/layout"
// import Seo from "../../components/seo"
import {graphql, useStaticQuery} from "gatsby";
import {ImagesTitle, ImagesStyled, ImagesGrid, ImageItem} from './styled';


const Image = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {
                extension: {
                    regex: "/(jpg)|(png)|(jpeg)/"
                },
                name: {
                    nin: ["background", "background2", "gatsby-icon", "gatsby-astronaut"]
                }
            }) {
                edges {
                    node {
                        base
                        childImageSharp {
                            fluid(maxHeight: 600, maxWidth:600) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)
    return (
        <ImagesStyled>
            <ImagesTitle>View our Destinations</ImagesTitle>
            <ImagesGrid>
                {data.allFile.edges.map((image, key ) => (
                    <ImageItem key={key} fluid={image.node.childImageSharp.fluid} alt={image.node.base.split('.')[0]}/>
                ))}
            </ImagesGrid>
        </ImagesStyled>
    )
}

export default Image;
