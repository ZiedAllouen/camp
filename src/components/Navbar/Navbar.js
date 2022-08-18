import React ,{useState,useEffect}from 'react'
import {AppBar,Button,Toolbar,Typography,Avatar} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import camp from '../../images/camp.png';
import mt from '../../images/mt.png';
import {Link,useHistory,useLocation} from "react-router-dom";
import * as actionType from '../../constants/actionTypes';
import decode from 'jwt-decode';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();
  
    const logout = () => {
      dispatch({ type: actionType.LOGOUT });
  
      history.push('/auth');
  
      setUser(null);
    };
  
    useEffect(() => {
      const token = user?.token;
  
      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
  
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
  return (

    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
    <Link to='/'  >
        <img  className={classes.image1} src={camp} alt="icon" height="50"/>
      </Link>
      <Link to='items'  >
        <img className={classes.image} src={mt} alt="icon" height="45"/>
        {/* <Typography component={Link} to='/' className={classes.heading} variant="h5" align='center'> HT</Typography> */}
    </Link>
    </div>
    <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;