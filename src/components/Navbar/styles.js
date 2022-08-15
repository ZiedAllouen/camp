import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
export default makeStyles((theme) => ({
  appBar: {
  borderRadius: 40,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    backgroundColor: 'rgba(255, 250, 250, 0.8)',
    
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    
  },
  image: {
    marginLeft: '15px',
  },
  sign: {
    marginLeft: '150px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));