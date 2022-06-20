
import * as React from "react";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Helmet from 'react-helmet';

function NotFountPage() {
    return (
        <Container style={{ background: 'white', minHeight:'200px'}}>
            No hay publicaciones que coincidan con tu búsqueda.
        </Container>
    );
}

export default NotFountPage;