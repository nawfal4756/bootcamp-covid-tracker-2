import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './MenuBar.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 100,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={styles.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            COVID-19 Tracker
          </Typography>
          <Link to="/" className={styles.text}><Button color="inherit">Global Stats</Button></Link>
          <Link to="/country" className={styles.text}><Button color="inherit">Stats By Country</Button></Link>
          <Link to="map" className={styles.text}><Button color="inherit">COVID-19 Map View</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}