import Grid from '@mui/material/Grid';
import { height } from '@mui/system';
import React from 'react';
import './item.css';
function Item(props) {
    return (
            <Grid container spacing={1} onClick={()=>props.onclick(props.id)}>
                <Grid item xs={2}>
                    <img className="ProductImage" src={props.img} />
                </Grid>
                <Grid item xs={8}>
                    <ul className="Product">
                        <li className="Price">
                            <h2>${props.price}</h2>
                        </li>
                        <li className="Title">{props.title}</li>
                    </ul>
                </Grid>
                <Grid item xs={1}>
                    <span className="titleSpan">{props.store}</span>
                </Grid>
            </Grid>
    )
}
export default Item;
