import { useStaticQuery, graphql } from "gatsby"
const getHomeImage = () => {
  const data = useStaticQuery(
    graphql`
    query MyQuery {
        file(relativePath:{eq:"homePic.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                    base64
                    
                    ...GatsbyImageSharpFluid
                }
 
            }
        }
    }
    `
  )
  return data.file.childImageSharp
}

export default getHomeImage