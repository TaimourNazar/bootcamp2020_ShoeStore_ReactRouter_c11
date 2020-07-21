import React from 'react'
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        margin: 20
    }
  });

export const ProductDetails = () => {
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

    const {productID} = useParams();
    const product = shoes[productID];
    const {name, img}=product;

    return (
        <div className={classes.root}>
            <h3><u>{name}</u></h3>
            <img width="250px" src={img} alt={name}/>
        </div>
    )
}
