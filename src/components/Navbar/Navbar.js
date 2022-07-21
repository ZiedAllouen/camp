import React from 'react'
import {AppBar,Button,Toolbar,Typography,Avatar} from '@material-ui/core';
import useStyles from './styles';
import camp from '../../images/camp.png';
import mt from '../../images/mt.png';
import {Link} from "react-router-dom";

const Navbar = () => {
    const classes=useStyles();    
    const user = null;
  return (

    <AppBar className={classes.appBar} position='static' color='inherit'>
    <div className={classes.brandContainer} >
        <img component={Link} to='/' className={classes.image1} src={camp} alt="memories" height="60"/>
        <img className={classes.image} src={mt} alt="memories" height="60"/>
    </div>
    <Toolbar className={classes.toolbar}>
        {user ? (
            <div className={classes.profile}> 
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} > {user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary"> Logout</Button>
            </div>
        ): (
            <Button lassName={classes.sign} component={Link} to='/auth' variant="contained" color="primary">Sign In</Button>
        )
        }
    </Toolbar>
    {/* <Typography className={classes.heading} variant="h5" align='center'> HT</Typography> */}
    
  </AppBar>
  )
}

export default Navbar