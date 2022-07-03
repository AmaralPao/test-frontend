import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Helmet from 'react-helmet';
import { useParams } from "react-router-dom";
import { getItem } from '../../services/ItemService'
import './ItemDetailPage.css';
import Breadcrumbs from '../common/Breadcrumbs'
import BreadcrumStyles from "../common/Breadcrumb.css";

function ItemDetailPage() {
    const [item, setItem] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getItem(id).then(item => {
            setItem(item.item)
        })
    }, [])

    return (
        <div>

  
        <Container>
        <Grid className={BreadcrumStyles.breadcrumb} item xs={6} style={{ background: 'transparent', padding: '16px' }}>
          <Grid item >
            <Breadcrumbs
              s1={"cat1"}
              s2={"cat2"}
              s3={"cat3"}
            />
          </Grid>
        </Grid>
      </Container>

        <Container style={{ background: 'white' }}>
            <Helmet>‍
                <title>Monitor</title>‍
                <meta name="description" content="Find all the best quality products your pet may need" />
            </Helmet>
            <Grid item xs={6} style={{ background: 'transparent', padding: '16px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={8} className='image'>
                        <img src={item.picture} />
                    </Grid>
                    <Grid item xs={4}>
                        <div>
                            {item.condition} - {item.sold_quantity} vendidos
                        </div>
                        <div className='title'>
                            <h1>{item.title}</h1>
                        </div>
                        <div className='price'>
                            <span>${ !item.price ? '':item.price.amount}</span>
                        </div>
                        <div>
                            <Button
                                style={{ marginRight: '32px', width:'100%' }}
                                variant="contained">Comprar</Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Container style={{ padding: '16px' }}>
                <h2>Descripción del Producto</h2>
                <p>{item.description}</p>
            </Container>
        </Container>
        </div>

    )
}
export default ItemDetailPage;