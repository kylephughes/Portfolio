import { Card, CardContent, Divider, Grid, Typography } from '@mui/material'

import Layout from '../components/layout'
import React from 'react'
import projects from '../data/projects.json'

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
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={7}
          lg={5}
          alignItems="center"
          justifyContent="center"
        >
          {projects.map((project, index) => {
            return (
              <Grid item justifyContent="center" key={index} style={{ paddingBottom: 25 }}>
                <Card variant="outlined" raised>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h6" color="textPrimary">
                          {project.title}
                        </Typography>
                      </Grid>
                      <Divider />
                      <Grid item xs={12} style={{ paddingBottom: 12, paddingTop: 12 }}>
                        <Typography color="textPrimary">{project.description}</Typography>
                      </Grid>
                      <Divider />
                      <Grid item xs={12} style={{ paddingTop: 12 }}>
                        <Typography color="textPrimary">Built With : {project.tech}</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
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
