import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props=>(
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click ={props.drawerClickHandler}/>
            </div>
            <div className ="toolbar_logo"><a href="/">Foreign exchange</a></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
