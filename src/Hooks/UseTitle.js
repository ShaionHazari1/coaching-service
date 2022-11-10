import { useEffect } from 'react';

const UseTitle = (title) => {
    return (
        useEffect(()=>{
            document.title = `${title} - Food Delivery` ;
        },[title])
    );
};

export default UseTitle;