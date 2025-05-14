import React from 'react';
import Navbar from '../../Component/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Component/Footer/Footer';

const Root = () => {
    return (
        <div className='w-full md:w-9/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;