import React, { useEffect, useState } from 'react';
import Button from './Button/Button';
import Cards from './Cards';

const FetchData = () => {

    const [datas,setDatas] = useState([]);
    const [sortData,setallData] = useState(true)
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(allData => setDatas(allData.data.tools))
    },[])

    function seeMoreHandler(){
        console.log('clicked')
      }

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-6'>
        {
            datas.slice(0, sortData ? 6 : 12).map(singleData => <Cards key={singleData.id} singleData={singleData}></Cards>)
        } 
        </div>
        <p onClick={seeMoreHandler}>
      <Button>See More</Button>
      </p>
    </>
    );
};

export default FetchData;