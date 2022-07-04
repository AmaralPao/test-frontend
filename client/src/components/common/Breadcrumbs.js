import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './Breadcrumbs.css'

function Breadcrumbs(props) {

    const listCategories = !props.categories ? null : props.categories.map((category, index) =>
        <React.Fragment key={category}>
           <span>{category}</span>{ index != (props.categories.length - 1) ? <ArrowForwardIosIcon key={category+index} sx={{ fontSize: 12 }}/> : ''}    
        </React.Fragment>
    );

    return (
        <Grid className='custom-breadcrumbs'> 
           {listCategories}
        </Grid>
    );
}

export default Breadcrumbs;
