import React from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import cm from './images/cm.jpg'

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position='static' color='inherit'>
        <Typography variant="h2" align='center'> Memories</Typography>
        <img src={cm} alt="memories" heigth="60"/>
      </AppBar>
      <Grid in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>

          </Grid>
        </Container>
      </Grid>
    </Container>
  )
}

export default App