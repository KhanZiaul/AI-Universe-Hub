import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const FetchData = () => {

    const [datas,setDatas] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(allData => setDatas(allData.data.tools))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-6'>
        {
            datas.map(singleData => <Cards key={singleData.id} singleData={singleData}></Cards>)
        } 
        </div>
    );
};

export default FetchData;