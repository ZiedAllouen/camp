import React,{useEffect,useState} from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import camp from './images/camp.png'
import mt from './images/mt.png'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import {useDispatch }from 'react-redux';
import {getPosts} from './actions/posts'

const App = () => {
  const [currentId,setCurrentId]=useState(null);
  const classes=useStyles();
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch])
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        {/* <Typography className={classes.heading} variant="h5" align='center'> HT</Typography> */}
        <img className={classes.image} src={camp} alt="memories" height="60"/>
        <img className={classes.image} src={mt} alt="memories" height="60"/>
      </AppBar>
      <Grid in>
        <Container>
          <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Container>
  )
}

export default App