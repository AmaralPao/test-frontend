import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet-async';
import { useParams } from "react-router-dom";
import { getItem } from '../../services/ItemService'
import './ItemDetailPage.css';
import Breadcrumbs from '../common/Breadcrumbs'


function ItemDetailPage() {
    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getItem(id).then(item => {
            setItem(item.item)
        })
    }, [item])

    return (
        <Container className='item-page'>
            <Helmet>‍
                <title>{item.title}</title>‍
                <meta name="description" content="Find all the best quality products your pet may need" />
            </Helmet>
            <Grid container >
                <Breadcrumbs
                    categories={["Electronica, audio y video", "Ipod", "Reporductores", "Ipod Touch", "32GB"]}
                />
            </Grid>
            <Grid  container className='item-card'>
                <Grid item xs={12} >
                    <Grid container>
                        <Grid item xs={8} className='item-image'>
                            <img src={item.picture} />
                        </Grid>
                        <Grid item xs={4} className='item-title'>
                            <div className='quatity'>
                                {item.condition} - {item.sold_quantity} vendidos
                            </div>
                            <div className='title'>
                                <h1>{item.title}</h1>
                            </div>
                            <div className='price'>
                                $<span>{!item.price ? '' : item.price.amount}</span>
                            </div>
                            <div className='button-wrapper'>
                                <Button
                                    variant="contained"
                                    className="buy-buton">
                                    Comprar
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Container className='item-description'>
                    <Grid item xs={12} >
                        <h2>Descripción del Producto</h2>
                    </Grid>
                    <Grid item xs={12} >
                        <p>{item.description}</p>
                    </Grid>

                </Container>
            </Grid>

        </Container>
    )
}
export default ItemDetailPage;