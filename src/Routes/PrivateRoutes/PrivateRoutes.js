import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='text-center flex align-items-center justify-center'>
            <Circles
        
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
        </div>
    }
    if(user){
        return children;
    }
    
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default PrivateRoutes;