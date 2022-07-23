import React ,{useState,useEffect}from 'react'
import {AppBar,Button,Toolbar,Typography,Avatar} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import camp from '../../images/camp.png';
import mt from '../../images/mt.png';
import {Link,useHistory,useLocation} from "react-router-dom";

const Navbar = () => {
    const classes=useStyles();    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history=useHistory();
    const location=useLocation();
    const logout =()=>{
        dispatch({type:'LOGOUT'})
        history.push('/')
        setUser(null);
    }

    useEffect(() => {
        const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);
  return (

    <AppBar className={classes.appBar} position='static' color='inherit'>
    <Link to='/' className={classes.brandContainer} >
        <img  className={classes.image1} src={camp} alt="memories" height="60"/>
        <img className={classes.image} src={mt} alt="memories" height="60"/>
        {/* <Typography component={Link} to='/' className={classes.heading} variant="h5" align='center'> HT</Typography> */}
    </Link>
    <Toolbar className={classes.toolbar}>
        {user ? (
            <div className={classes.profile}> 
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} > {user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} > Logout</Button>
            </div>
        ): (
            <Button lassName={classes.sign} component={Link} to='/auth' variant="contained" color="primary">Sign In</Button>
        )
        }
    </Toolbar>
    
    
  </AppBar>
  )
}

export default Navbar