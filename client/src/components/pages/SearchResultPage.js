import React, { useState, useEffect } from 'react';
import { searchItem } from '../../services/ItemService'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Item from '../Item'
import Divider from '../Divider'
import './SearchResultPage.css'
import Breadcrumbs from '../common/Breadcrumbs'
import Grid from '@mui/material/Grid';

function SearchResultPage(props) {
    const [items, setItems] = useState(null);
    const [categories, setCategories] = useState(null);
    let [searchParams] = useSearchParams();
    let [searchParameter] = useState(searchParams.get("search"))
    const navigate = useNavigate();

    // Handle click of the item
    function onclick(id) {
        navigate(`/items/${id}`)
    }

    // Load Items
    useEffect(() => {
        if (searchParameter) {
            searchItem(searchParameter).then(items => {
                setItems(items.items)
                setCategories(items.categories)
            })
        }
    }, [])

    // Save list of components in an array
    const listItems = !items ? null : items.map((item, index) =>
        <React.Fragment key={item.id}>
            <Item
                id={item.id}
                shipping={item.free_shipping}
                title={item.title}
                price={item.price.amount}
                store={item.store ? item.store.nick_name : 'VENDEDOR'}
                img={item.picture}
                onclick={onclick}
            />
            {index != (items.length - 1) ? <Divider /> : ''}
        </React.Fragment>
    );

    return (
        <Container >
            <Grid item >
                <Breadcrumbs
                    categories={categories ? categories.slice(0, 5) : []}
                />
            </Grid>
            <Grid item className="results-page">
                {listItems}
            </Grid>

        </Container>)
}

export default SearchResultPage;