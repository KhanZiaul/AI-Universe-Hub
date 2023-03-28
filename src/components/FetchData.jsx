import React, { useEffect, useState } from 'react';

const FetchData = () => {

    const [datas,setDatas] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(allData => console.log(allData))
    },[])
    return (
        <>
            
        </>
    );
};

export default FetchData;