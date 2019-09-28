import React from "react"
import Img from "gatsby-image"
import "./sidebar.css"
import getHomeImage from "../utils/homePageImage"

const Sidebar = React.memo(({hideSidebar}) => {

   const img = getHomeImage()
   console.log(hideSidebar)
  return (
      
    <>
    <Img fluid={img.fluid} alt="Brewery" fadeIn={false}/>
      <strong>
        Kyle Hughes
        Full Stack Developer 
        Montclair, NJ
      </strong>
    </>
  )
}
)

 export default Sidebar
