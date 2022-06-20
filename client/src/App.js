import * as React from "react";
import "./App.css";
import "./components/common/Breadcrumb.css";
import SearchBar from "./components/common/SearchBar";
import ItemDetailPage from './components/pages/ItemDetailPage';
import SearchResultPage from './components/pages/SearchResultPage';
import NotFoundPage from './components/pages/NotFoundPage';
import Breadcrumbs from './components/common/Breadcrumbs';
import BreadcrumStyles from "./components/common/Breadcrumb.css";
import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';




function App () {

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
                s1={"cat1"}
                s2={"cat2"}
                s3={"cat3"}
              />
            </Grid>
          </Grid>
        </Container>
        <Routes>
          <Route path="/" />
          <Route path="/items/:id" element={<ItemDetailPage />} />
          <Route path="/items" element={<SearchResultPage  setSearchInput = { "ddd" } />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </div>

    )
}
export default App;
