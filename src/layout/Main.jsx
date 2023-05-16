import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import NavBar from '../pages/shared/header/NavBar';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;