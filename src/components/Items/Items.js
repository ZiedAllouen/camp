import React, { useState, useEffect } from 'react';
import { Container, AppBar, TextField, Typography,Button, Grow, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import PostItems from '../PostItems/PostItems';
import FormP from '../FormP/FormP';
import { getItems,getItemsBySearch } from '../../actions/items'
import useStyles from './styles';
import Pagination from './Pagination'
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Items = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const searchItem = () => {
    if (search.trim() || tags) {
      dispatch(getItemsBySearch({ search, tags: tags.join(',') }));
      history.push(`/items/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchItem();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <Container maxWidth="xl">
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={9}>
              <PostItems setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
              <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Items" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
              <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
              <Button onClick={searchItem} className={classes.searchButton} variant="contained" color="primary">Search</Button>
            </AppBar>
              <FormP  currentId={currentId} setCurrentId={setCurrentId} />
              {(!searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Items