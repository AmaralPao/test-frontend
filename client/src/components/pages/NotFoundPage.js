
import * as React from "react";
import Grid from '@mui/material/Grid';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import './NotFoundPage.css';

function NotFountPage() {
    return (
        <Grid
            container direction="row"
            justifyContent="center"
            alignItems="center"
            className="not-found"
        >
            <Grid item xs={3} className="not-found-icon-wrapper">
                <SearchOffIcon sx={{ fontSize: 100 }} className="not-found-icon" />
            </Grid>
            <Grid item xs={9} className="not-found-text">
                <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
                <ul>
                    <li>
                        <strong>Revisa la ortografía</strong> de la palabra.
                    </li>
                    <li>
                        Utiliza <strong>palabras más genéricas</strong> o menos palabras.
                    </li>
                    <li>
                        <strong>Navega por las categorías</strong> para encontrar un producto similar
                    </li>
                </ul>
            </Grid>

        </Grid >
    );
}

export default NotFountPage;