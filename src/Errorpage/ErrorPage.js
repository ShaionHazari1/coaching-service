import React from 'react';
import img from '../assets/404 Error Page not Found with people connecting a plug-amico (1).svg';

const ErrorPage = () => {
    return (
        <div>
             <div className="text-center lg:text-left">
                    <img className='w-1/2 ' src={img} alt="" />
                </div>
        </div>
    );
};

export default ErrorPage;