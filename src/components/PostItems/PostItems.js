import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import PostItem from './PostItem/PostItem'
import useStyles from './styles';
const PostItems = ({ setCurrentId }) => {
    const items = useSelector((state) => state.items);
    const classes = useStyles();
  console.log(items)
    return (
      !items.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {items.map((item) => (
            <Grid key={item._id} item xs={12} sm={6} md={6}>
              <PostItem item={item} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )
    );
  };

export default PostItems