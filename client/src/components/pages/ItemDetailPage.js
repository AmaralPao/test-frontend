import * as React from "react";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Helmet from 'react-helmet';

import productImage from '../../assets/productImage.webp';

function ItemDetailPage() {
    return (
        <Container style={{ background: 'white' }}>
            <Helmet>‍
                <title>Monitor</title>‍
                <meta name="description" content="Find all the best quality products your pet may need" />
            </Helmet>
            <Grid item xs={6} style={{ background: 'transparent', padding: '16px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <img src={productImage} />
                    </Grid>
                    <Grid item xs={4}>
                        <div>
                            Nuevo - 50 vendidos
                        </div>
                        <div>
                            <h1>Monitor</h1>
                        </div>
                        <div>
                            <span>$848392.99</span>
                        </div>
                        <div>
                            <Button
                                style={{ marginTop: '32px' }}
                                variant="contained">Comprar</Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Container style={{ padding: '16px' }}>
                <h3>Descripción del Producto</h3>

                <span>Mucho texto</span>
            </Container>
        </Container>

    )
}
export default ItemDetailPage;