import React from 'react'
import { Link } from 'react-router-dom';
import {makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: 20
    },
    media: {
      height: 140,
    },
  });

export const ProductIndex = () => {
    const classes = useStyles();

    const shoes={
        "blue-sneaker":{
            name: "Sneaker",
            img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            text: "Good Quality",
        },
        "jogging-joggers":{
            name: "Joggers",
            img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            text: "Good Quality"
        },
        "shoes":{
            name: "Shoes",
            img: "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "Good Quality"
        },
        "loafers":{
            name: "Loafers",
            img: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "Good Quality"
        },
        "brown-leather-shoes":{
            name: "Brown Leather Shoes",
            img: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "Good Quality"
        },
        "dress-shoes":{
            name: "Dress Shoes",
            img: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "Good Quality"
        },
        "girls-sneaker":{
            name: "Girls Sneaker",
            img: "https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "Good Quality"
        },
        "baby-boy-shoes":{
            name: "Baby Boy Shoes",
            img: "https://images.pexels.com/photos/3565860/pexels-photo-3565860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "Good Quality"
        },
        "baby-girl-shoes":{
            name: "Baby Girl Shoes",
            img: "https://images.pexels.com/photos/982189/pexels-photo-982189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "Good Quality"
        }
    };
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
            {Object.entries(shoes).map(([productID,{name,img,text}])=>
                (
                    <Grid item xs={4}>
                    <Card className={classes.root} >
                        <Link to={productID} style={{ textDecoration: 'none'}}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={img} 
                                    title={name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {text}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                    </Grid>
                )
            )}
            </Grid>
        </div>
    )
}
