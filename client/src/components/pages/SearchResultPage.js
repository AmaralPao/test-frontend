import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { searchItem } from '../../services/ItemService'
import Item from '../Item'
import Divider from '../Divider'

function SearchResultPage() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        searchItem("zapatos").then(items => {
            setItems(items.items)
        })
    }, [])

    return (

        <Container style={{ background: 'white' }}>
            <Grid item xs={6} style={{ background: 'transparent', padding: '16px' }}></Grid>
            {!items ? '' : items.map(item => {
                return (
                    <React.Fragment>
                        <Item
                            key={item.id}
                            title={item.title}
                            price={item.price.amount}
                            store={"algo"}
                            img={item.picture}
                        />
                        <Divider />
                    </React.Fragment>
                )
            })}
        </Container>)
}
export default SearchResultPage;