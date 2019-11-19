import { useStaticQuery, graphql } from "gatsby"
const getHomeImage = () => {
  const data = useStaticQuery(
    graphql`
    query MyQuery {
        file(relativePath:{eq:"profPic.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 700, maxHeight: 850) {
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