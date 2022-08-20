import PlaceCard from './PlaceCard';
import places from './Static';
import useWindowPosition from './useWindowPosition';
import useStyles from './styles';
import {Divider } from '@material-ui/core';

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.places} id="place-to-visit">
      <PlaceCard place={places[1]} checked={checked} />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <PlaceCard place={places[0]} checked={checked} />
    </div>
  );
}