import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import PostItems from '../PostItems/PostItems';
import FormP from '../FormP/FormP';
import { getItems } from '../../actions/items'
import useStyles from './styles';


const Items = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getItems());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <PostItems setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormP  />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Items