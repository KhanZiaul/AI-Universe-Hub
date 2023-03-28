import React from 'react';

const Cards = (props) => {
   const {name,image,features} = props.singleData; 
   console.log(props.singleData)
    return (
        <>
        <div className='w-96'>
            <img className='w-full' src={image} alt="" />
            <div className='text-left'>
                <h2 className='font-bold text-2xl my-4'>Features</h2>
                {
                    features.map((feature , index) => {
                        return (
                            <p>
                            {index+ 1} . {feature}
                            </p>
                        )
                    })
                }

                <hr className='border-1 border-gray-500 my-4'/>

                <h2 className='font-bold text-2xl'>{name}</h2>
            </div>
        </div>
        </>
    );
};

export default Cards;