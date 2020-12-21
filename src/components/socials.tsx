import { Grid, IconButton } from '@material-ui/core'

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import React from 'react'

const Socials = () => {
  const socials: Array<any> = [
    {
      icon: <GitHubIcon />,
      link: 'https://github.com/hughes72',
    },
    { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/kyle-hughes-b2805b83"' },
  ]
  return (
    <Grid container justify="center" item xs={12}>
      {socials.map(social => (
        <Grid item key={social.link}>
          <IconButton>{social.icon}</IconButton>
        </Grid>
      ))}
    </Grid>
  )
}

export default Socials
