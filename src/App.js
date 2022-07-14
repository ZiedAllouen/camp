import React from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import cm from './images/cm.jpg'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles'

const App = () => {
  const classes=useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant="h2" align='center'> Memories</Typography>
        <img className={classes.image} src={cm} alt="memories" height="60"/>
      </AppBar>
      <Grid in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Container>
  )
}

export default App