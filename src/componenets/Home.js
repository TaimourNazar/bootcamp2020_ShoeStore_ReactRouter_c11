import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "500px",
        backgroundImage: `url(${ 'https://images.pexels.com/photos/9379/drinking-alley-fun-bowling-9379.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' })`
    },
    heading:{
        color:'white',
    }
  });


export const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.heading}>Welcome to Shoe Store</h1>
            {"      "}
            <h3 className={classes.heading}>Checkout products section for all shoes</h3>
        </div>
    )
}
