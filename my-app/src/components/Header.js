import React from 'react';
import { Link } from 'react-router-dom';
const Header = (props) => {
    const{ Component} = props
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30,
    }
    return (
        <div>
            <div>
            <h3 style={style}> <Link to='/'>HOME </Link></h3>
            <h3 style={style}><Link to='/jokes'>JOKES</Link></h3>
            </div>
           <Component/>
        </div>
    );
}

export default Header;