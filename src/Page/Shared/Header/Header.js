import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then()
        .then()
      }
    
    return (
        <div>
            <div className="navbar navBarBg text-primary-content">
            <Link className='btn btn-ghost normal-case text-3xl' to="/">Food ServerMan</Link>
           <Link className='btn btn-ghost normal-case text-xl' to="/home">Home</Link>
           <Link className='btn btn-ghost normal-case text-xl' to="/blog">Blog </Link>
           
           {
                user?.email ?
               <> 
                <Link className='btn btn-ghost normal-case text-xl' to="/review">MY Reviews</Link>
                <Link className='btn btn-ghost normal-case text-xl' to="/addservice">Add Service </Link>
                <Link className='btn btn-ghost normal-case text-xl' onClick={()=>{handleLogOut()}}>Log Out </Link>
               </>
                :
                <Link className='btn btn-ghost normal-case text-xl' to="/login">Login </Link>
           }
           
           
</div>
        </div>
    );
};

export default Header;