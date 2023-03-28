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
        <div>
        {
            datas.map(singleData => <Cards key={singleData.id} singleData={singleData}></Cards>)
        } 
        </div>
    );
};

export default FetchData;