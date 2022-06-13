import * as React from "react";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import productImage from '../../assets/productImage.webp';
import '../pages/SearchResultPage.css';
//import useFetch from "./components/useFetch";


function SearchResultPage() {
    return (
        <Container style={{ background: 'white' }}>
            <Grid item xs={6} style={{ background: 'transparent', padding: '16px' }}></Grid>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        <img className="ProductImage" src={productImage} />
                    </Grid>
                    <Grid item xs={8}>
                        <ul className="Product">
                            <li className="Price">
                                <h2>$1388</h2>
                            </li>
                            <li className="Description">Description</li>
                        </ul>
                    </Grid>
                    <Grid item xs={1}>
                       <span className="LocationSpan">Argentina</span> 
                    </Grid>
                </Grid>
                <div style={{ borderTop: "2px solid #eee ", marginLeft: 20, marginRight: 20 }}></div>                
                <Grid className="Product-Result" container spacing={1}>
                    <Grid item xs={2}>
                        <img className="ProductImage" src={productImage} />
                    </Grid>
                    <Grid item xs={8}>
                        <ul className="Product">
                            <li className="Price">
                                <h2>$1388</h2>
                            </li>
                            <li className="Description">Description</li>
                        </ul>
                    </Grid>
                    <Grid item xs={1}>
                       <span className="LocationSpan">Argentina</span> 
                    </Grid>
                </Grid>
                <div style={{ borderTop: "2px solid #eeeeee ", marginLeft: 20, marginRight: 20 }}></div>
        </Container>)
}
export default SearchResultPage;