import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Home from "./component/Home";
import ArtistPage from "./component/ArtistPage";
import AlbumPage from "./component/AlbumPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <Row>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/albumpage/:id' element={<AlbumPage/>}/>
              <Route path='/artistpage/:id' element={<ArtistPage/>}/>
            </Routes>
          </Row>
        </Container>
        
      </div>
    </BrowserRouter>
  );
}

export default App;