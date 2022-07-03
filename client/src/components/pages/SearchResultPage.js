import React, { useState, useEffect } from 'react';
import { searchItem } from '../../services/ItemService'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '../Item'
import Divider from '../Divider'

function SearchResultPage(props) {
    const [items, setItems] = useState(null);
    let [searchParams] = useSearchParams();
    let [searchParameter] = useState(searchParams.get("search"))
    const navigate = useNavigate();
    
    // Handle click of the item
    function onclick(id){
        navigate(`/items/${id}`)
    }

    // Load Items
    useEffect(() => {
        if(searchParameter){
            searchItem(searchParameter).then(items => setItems(items.items))
        }
    }, [searchParameter])

    return (
        <Container style={{ background: 'white' }}>
            <Grid item xs={6} style={{ background: 'transparent', padding: '16px' }}></Grid>
            {!items ? '' : items.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        <Item
                            id={item.id}
                            title={item.title}
                            price={item.price.amount}
                            store={"algo"}
                            img={item.picture}
                            onclick={onclick}
                        />
                        <Divider/>
                    </React.Fragment>
                )
            })}
        </Container>)
}

export default SearchResultPage;