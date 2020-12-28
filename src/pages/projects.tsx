import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core'

import Layout from '../components/layout'
import React from 'react'
import projects from '../data/projects.json'

const Projects = () => {
  return (
    <Layout>
      <Grid wrap="nowrap" container item direction="column" xs={12}>
        <Grid item container justify="center" xs={12} style={{ paddingBottom: 12 }}>
          <Typography variant="h4" color="textPrimary">
            Projects
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          xs={12}
          alignItems="center"
          item
          style={{ paddingBottom: 12 }}
        >
          <Grid container item xs={12} sm={12} md={7} lg={5}>
            <Typography color="textPrimary">
              Check out some of the projects I have worked on - some with small groups of engineers
              and some individually!
            </Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" direction="column" alignItems="center" item xs={12}>
          {projects.map((project, index) => {
            return (
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={7}
                lg={5}
                justify="center"
                key={index}
                style={{ paddingBottom: 25 }}
              >
                <Grid item xs={12}>
                  <Card variant="outlined">
                    <CardContent>
                      <Grid container direction="column">
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
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Projects
