import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import MainLayout from '../layouts/MainLayout';
import Search from '../pages/Search';

const useRouteElements = () => {
  const routes = [
    {
      path: '/',
      element:
        <MainLayout>
          <Home />
        </MainLayout>
      ,
    },
    {
      path: '/about',
      element:
        <MainLayout>
          <About />
        </MainLayout>,
    },
    {
      path: '/contact',
      element: 
      <MainLayout>
        <Contact />
      </MainLayout>,
    },
    {
      path: '/search',
      element: 
      <MainLayout>
        <Search />
      </MainLayout>,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ];

  return useRoutes(routes);
};

export default useRouteElements;
