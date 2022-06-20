import Grid from '@mui/material/Grid';
import { height } from '@mui/system';
import React from 'react';
import './item.css';
function Item(props) {
    return (
        <React.Fragment>
            <Grid container spacing={1}>
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
        </React.Fragment>
    )
}
export default Item;
