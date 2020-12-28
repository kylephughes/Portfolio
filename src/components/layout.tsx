import { Grid, ThemeProvider, createMuiTheme } from '@material-ui/core'

import Header from './header'
import React from 'react'
import Sidebar from './sidebar'
import config from '../config'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header siteTitle={config.title} />
        </Grid>
        <Grid container item xs={12} style={{ padding: 20 }}>
          {/* <Grid container item xs={12} style={{ padding: 20 }}>
          <Grid container direction="column" item xs={12} md={3}>
            <Sidebar />
          </Grid> */}
          {/* <Grid container direction="column" item xs={12} md={8} style={{ paddingTop: 20 }}> */}
          {children}
          {/* </Grid> */}
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Layout
