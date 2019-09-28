import React from "react"
import Img from "gatsby-image"
import "./sidebar.css"
import getHomeImage from "../utils/homePageImage"
import Contact from "../pages/contact"
import { Paper, Typography, Divider } from "@material-ui/core"
const Sidebar = React.memo(({ hideSidebar }) => {
  const img = getHomeImage()
  return (
    <>
      <Img
        className="roundImage"
        fluid={img.fluid}
        alt="Brewery"
        fadeIn={false}
      />
      <Paper>
        <Typography align="center">
          Kyle Hughes <br />
          Full Stack Developer <br />
          Montclair, NJ
        </Typography>
        <Divider />
        <Contact />
      </Paper>
    </>
  )
})

export default Sidebar
