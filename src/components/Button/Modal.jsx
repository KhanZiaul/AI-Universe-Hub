import React from 'react';

const Modal = (props) => {
    console.log(props.modalDataIs)
    const {id} = props.modalDataIs ;
    return (
    <>
    <input type="checkbox" id="my-modal" className="modal-toggle" />
     <div className="modal">
     <div className="modal-box">
     <h3 className="font-bold text-lg">{id}</h3>
     <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
     <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Close</label>
      </div>
     </div>
    </div>
   </>
    );
};

export default Modal;