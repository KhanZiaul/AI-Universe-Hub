import React, { useEffect, useState } from 'react';
import Button from './Button/Button';
import Modal from './Button/Modal';
import Cards from './Cards';

const FetchData = () => {

    const [datas,setDatas] = useState([]);
    const [sortData,setAllData] = useState(true)
    const [modal,setModal] = useState([])
    const [modaldata,setModalData] =useState({})
    
    console.log(datas)

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(allData => setDatas(allData.data.tools))
    },[])

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${modal}`)
        .then(res => res.json())
        .then(modalSingleData => setModalData(modalSingleData.data))
    },[modal])

    function seeMoreHandler(){
        setAllData(false);
    }

    function handlerId(id){
      setModal(id)
    }

    const sortByDate = () => {

        const sortData = datas.sort((a,b) => {
            return new Date(a.published_in) - new Date(b.published_in)
        });

        setDatas([...datas,sortData]) ;
    }

    return (
        <>
        <p className='inline-block' onClick={sortByDate}>
        <Button>Sort By Date</Button>
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-6'>
        {
            datas.slice(0, sortData ? 6 : 12).map(singleData => <Cards key={singleData.id} singleData={singleData} handlerId = {handlerId}></Cards>)
        } 
        </div>
        {
        sortData &&
        <p className='inline-block' onClick={seeMoreHandler}>
        <Button>See More</Button>
      </p>
        }
        <Modal modalDataIs={modaldata} ></Modal>
    </>
    );
};

export default FetchData;