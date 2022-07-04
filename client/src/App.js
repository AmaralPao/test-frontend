import React, { useState, useEffect } from 'react';
import "./App.css";
import SearchBar from "./components/common/SearchBar";
import ItemDetailPage from './components/pages/ItemDetailPage';
import SearchResultPage from './components/pages/SearchResultPage';
import NotFoundPage from './components/pages/NotFoundPage';
import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useNavigate, createSearchParams } from 'react-router-dom';



function App() {
  // State and variables
  const [searchText, setSearchText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();


  // Gets the text in the search
  const handleSearchClick = () => {
    if (searchText) {
      setSearchQuery(searchText)
      const params = { 'search': searchText };
      navigate({
        pathname: '/items',
        search: `?${createSearchParams(params)}`,
      });
    }
  }

  // Handle text typing and updates the searchText sate 
  const handleOnChange = (event) => {
    setSearchText(event.target.value)
  }

  // Gets text and search with Enter key
  function handleEnter(event) {
    if (event.key === 'Enter') {
      if (searchText) {
        setSearchQuery(searchText)
        const params = { 'search': searchText };
        navigate({
          pathname: '/items',
          search: `?${createSearchParams(params)}`,
        });
      }
    }
  }

  return (
    <div>
      <Container maxWidth="100%" className="App" style={{ background: '#FFE600' }}>
        <Grid item xs={12} >
        </Grid>
        <SearchBar handleSearchClick={handleSearchClick} handleOnChange={handleOnChange} handleEnter={handleEnter} />
      </Container>
      <Routes>
        <Route path="/" />
        <Route path="/items/:id" element={<ItemDetailPage />} />
        <Route path="/items" element={<SearchResultPage key={searchQuery} value={searchText}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>

  )
}

export default App;
