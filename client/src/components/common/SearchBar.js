
import React from 'react';
import logo from '../../assets/Logo_ML.png';
import searchIcon from '../../assets/ic_Search.png';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import './SearchBar.css';


//Material UI CSS
const Search = styled('div')(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderBottomRightRadius: '4px',
  borderTopRightRadius: '4px',
  borderRadius: theme.shape.borderRadius,
  color: '#000',
  marginLeft: 0,
  position: 'relative',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  }
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#333333',
  ':placeholder': {
    color: '#999999'
  },
  width: '800px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: '18px',
    // vertical padding + font size from searchIcon
    paddingLeft: '10px',
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    width: '100%'
  },
}));


function SearchBar(props) {
  const navigate = useNavigate();
  
  // Handles click on MercadoLibre Icon to redirect to /
  const handleIconClick = () => {
    navigate('/');
  }

  return (
    <Container sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{ background: '#FFE600', boxShadow: 'none' }}>
        <Toolbar style={{ margin: 'auto' }}>
          <img src={logo} className='app-logo' alt='logo' style={{ marginRight: '20px' }} onClick={handleIconClick} />
          <Search>
            <div className='search-button' onClick={props.handleSearchClick}>
              <img src={searchIcon} />
            </div>
            <StyledInputBase
              onChange={props.handleOnChange}
              onKeyDown={props.handleEnter}
              placeholder='Nunca dejes de buscar'
              inputProps={{ 'aria-label': 'search' }}
              className='search-box'
              value={props.value}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default SearchBar;