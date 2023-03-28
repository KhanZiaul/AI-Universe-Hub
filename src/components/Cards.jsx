import React from 'react';

const Cards = (props) => {
   const {image} = props.singleData; 
   console.log(props.singleData)
    return (
        <>
    <div className="card w-96 bg-base-100 shadow-xl">
       <figure><img src={image} alt="" /></figure>
    <div className="card-body">
        <h2 className="card-title">Features</h2>
        
    <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
       </div>
      </div>
    </div>
        </>
    );
};

export default Cards;