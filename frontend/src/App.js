import React from 'react';
import './global.css';
import Modal from 'react-modal';

import Routes from './routes';

import logo from './assets/logo.png';

import { Navbar } from './components/Navbar';

Modal.setAppElement('#root');

const App = () => {
  return (
    <>
      <Navbar imageSrc={logo} />
      <Routes />
    </>
  );
}

export default App;
