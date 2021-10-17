import { AppBar, Drawer, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'

const navLinks = [
  <Link href="/home">
    <a className="styledAnchor">
      <Typography color="textPrimary">Home</Typography>
    </a>
  </Link>,
  <Link href="/blog">
    <a className="styledAnchor">
      <Typography color="textPrimary">Blog</Typography>
    </a>
  </Link>,
  <Link href="/projects">
    <a className="styledAnchor">
      <Typography color="textPrimary">Projects</Typography>
    </a>
  </Link>,
]
const Header = ({ siteTitle }) => {
  const [isMobile, setMobile] = useState<boolean>(false)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900 ? setMobile(true) : setMobile(false)
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())
    return () => window.removeEventListener('resize', () => setResponsiveness())
  }, [])
  const handleDrawerClose = (e: any) => {
    setOpenDrawer(false)
  }
  return (
    <>
      <AppBar color="default" position="sticky">
        <Toolbar>
          <Grid container>
            <Grid item xs={1}>
              {isMobile ? (
                <IconButton
                  onClick={(e: any) => setOpenDrawer(true)}
                  disableFocusRipple
                  disableTouchRipple
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Typography variant="h5">KH</Typography>
              )}

              <Drawer
                style={{ width: 400 }}
                anchor="left"
                open={isMobile && openDrawer}
                onClose={handleDrawerClose}
              >
                <Grid
                  container
                  direction="column"
                  wrap="nowrap"
                  justifyContent="center"
                  alignItems="center"
                  item
                  style={{ width: 250, paddingTop: 50 }}
                >
                  {navLinks.map((link, index) => (
                    <Grid
                      container
                      alignContent="center"
                      justifyContent="center"
                      key={index}
                      item
                      xs={12}
                      style={{ paddingBottom: 12 }}
                    >
                      {link}
                    </Grid>
                  ))}
                </Grid>
              </Drawer>
            </Grid>
            {!isMobile ? (
              <Grid container alignContent="center" item xs={11} justifyContent="center">
                {navLinks.map((link, index) => (
                  <Grid item key={index} xs={1}>
                    {link}
                  </Grid>
                ))}
              </Grid>
            ) : null}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
