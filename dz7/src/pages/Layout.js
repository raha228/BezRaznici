import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Link to='/'>Все посты</Link>
            <Outlet/>
            <footer>See you</footer>
        </div>
    );
};

export default Layout;