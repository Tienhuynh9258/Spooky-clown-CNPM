import React, { useEffect } from 'react';
import {Footer, Header, Home } from '../components';
import store from '../redux/store';
import { loadUser } from '../redux/auth/authSlice';

function HomePage(props) {
  useEffect(() => store.dispatch(loadUser()), []);
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default HomePage;
