import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Page/Home/Home/Home';
import Footer from '../Page/Shared/Footer/Footer';
import Header from '../Page/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;