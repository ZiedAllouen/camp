import CenterCard from './CenterCard';
import places from './Static';

import useStyles from './styles';
import {Button, Divider } from '@material-ui/core';

export default function () {
  const classes = useStyles();

  return (
    <>
    <div className={classes.places} >
      <CenterCard place={places[2]}  />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <CenterCard place={places[1]}  />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <CenterCard place={places[0]} />
      
      
    </div>
    <div className={classes.places} >
      <CenterCard place={places[2]}  />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <CenterCard place={places[1]}  />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <CenterCard place={places[0]} />
      
      
    </div>
    <div className={classes.places} >
      <CenterCard place={places[2]}  />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <CenterCard place={places[1]}  />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <CenterCard place={places[0]} />
      
      
    </div>
     
    </>
  );
}