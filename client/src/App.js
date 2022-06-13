import * as React from "react";
import "./App.css";
import "./components/common/Breadcrumb.css";
import SearchBar from "./components/common/SearchBar";
import ItemDetailPage from './components/pages/ItemDetailPage';
import SearchResultPage from './components/pages/SearchResultPage';
import Breadcrumbs from './components/common/Breadcrumbs';
import BreadcrumStyles from "./components/common/Breadcrumb.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import useFetch from "./components/useFetch";



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      s1: 'categoria1',
      s2: 'categoria2',
      s3: 'categoria3',
    };
  }
  render() {
    return (
      <div>
        <Container maxWidth="100%" className="App" style={{ background: '#FFE600' }}>
          <Grid item xs={12} style={{ background: 'pink' }}>
          </Grid>
          <SearchBar />
          
        </Container>
        <Container>
          <Grid className={BreadcrumStyles.breadcrumb} item xs={6} style={{ background: 'transparent', padding: '16px' }}>
            <Grid item >
              <Breadcrumbs
                s1={this.state.s1}
                s2={this.state.s2}
                s3={this.state.s3}
              />
            </Grid>
          </Grid>
        </Container>


        <BrowserRouter>
            <Routes>
              <Route path="/items/:id" element={<ItemDetailPage />} />
              <Route path="/items/search" element={<SearchResultPage />} />
            </Routes>
          </BrowserRouter>
      </div>

    );
  }
}
export default App;
