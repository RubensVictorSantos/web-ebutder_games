import React from 'react';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rotas from './routes.js';

function App() {
  return (
    <>
      <div className="d-flex w-100 flex-wrap justify-content-center" style={{backgroundColor: "black"}}>
        <Rotas/>
      </div>
    </>
  );
}

export default App;
