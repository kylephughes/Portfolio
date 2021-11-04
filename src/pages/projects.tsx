import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'

import Layout from '../components/layout'
import React from 'react'
import { projects } from 'data'

const handleBtnClick = (link: string) => {
  window.open(link)
}
const Projects = () => {
  return (
    <Layout>
      <Grid container item justifyContent="center">
        <Grid container item justifyContent="center" style={{ paddingBottom: 12 }}>
          <Typography variant="h4" color="textPrimary">
            Projects
          </Typography>
        </Grid>
        <Grid container direction="column" alignItems="center" item style={{ paddingBottom: 12 }}>
          <Typography color="textPrimary">
            Check out some of the projects I have worked on - some with small groups of engineers
            and some individually!
          </Typography>
        </Grid>
        <Grid container direction="column" item alignItems="center">
          {projects.map((project, index) => {
            return (
              <Grid item key={index} style={{ paddingBottom: 25 }}>
                <Card sx={{ maxWidth: 800 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="textPrimary">
                      {project.title}
                    </Typography>
                    <Typography gutterBottom color="textSecondary">
                      {project.description}
                    </Typography>

                    <Typography color="textSecondary">Built With: {project.tech}</Typography>
                  </CardContent>
                  <CardActions style={{ paddingLeft: 8 }}>
                    <Button onClick={e => handleBtnClick(project.link)}>View repo</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Projects
