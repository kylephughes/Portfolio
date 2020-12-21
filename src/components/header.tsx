import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core'

import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import styles from './header.module.css'

const Header = ({ siteTitle }) => {
  const headerLink = styled.a`
    color: red;
  `
  return (
    <>
      <AppBar color="default" position="relative">
        <Toolbar>
          <Grid container>
            <Grid item xs={1}>
              <Typography variant="h5">KH</Typography>
            </Grid>
            <Grid container alignContent="center" item xs={11} justify="center">
              <Grid item xs={1}>
                <Link href="/about">
                  <a>
                    <Typography color="textPrimary">About</Typography>
                  </a>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link href="/blog">
                  <a>
                    <Typography color="textPrimary">Blog</Typography>
                  </a>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link href="/projects">
                  <a>
                    <Typography color="textPrimary">Projects</Typography>
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
