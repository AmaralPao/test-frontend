import Grid from '@mui/material/Grid';
import React from 'react';
import shipping from '../assets/ic_shipping.png';
import './item.css';

function Item(props) {
    return (
        <Grid container spacing={1} onClick={() => props.onclick(props.id)}>
            <Grid item xs={2}>
                <img className="product-image" src={props.img} />
            </Grid>
            <Grid item xs={8} className="product-desc">
                <Grid item xs={12}>
                    <h2>${props.price}</h2>
                    {props.shipping ? <img src={shipping} className='shipping' /> : null}
                </Grid>
                <Grid item xs={12}>
                    <span>{props.title}</span>
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <span className="seller">{props.store}</span>
            </Grid>
        </Grid>
    )
}
export default Item;
