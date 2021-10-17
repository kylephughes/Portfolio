import { Grid, ThemeProvider, createMuiTheme, createTheme } from '@mui/material'

import Header from './header'
import React from 'react'
import config from '../config'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container>
        <Grid item xs={12}>
          <Header siteTitle={config.title} />
        </Grid>
        <Grid className="container" container item style={{ padding: 20 }}>
          {children}
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Layout
