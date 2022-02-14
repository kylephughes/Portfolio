import { Grid, IconButton } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import React from 'react'

const Socials = () => {
  const socials: Array<any> = [
    {
      icon: <GitHubIcon />,
      link: 'https://github.com/kylephughes',
    },
    { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/kyle-hughes-b2805b83' },
  ]
  const navigateTo = (link: string) => {
    window.open(link)
  }
  return (
    <Grid wrap="nowrap" container justifyContent="center" item xs={12}>
      {socials.map(social => (
        <Grid item key={social.link}>
          <IconButton onClick={(e: any) => navigateTo(social.link)}>{social.icon}</IconButton>
        </Grid>
      ))}
    </Grid>
  )
}

export default Socials
