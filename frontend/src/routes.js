import React from 'react';
import { BrowserRouter, Routes as RoutesDom, Route } from 'react-router-dom';

import { Home } from './pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route path='/' element={<Home />} />
      </RoutesDom>
    </BrowserRouter>
  )
};

export default Routes;