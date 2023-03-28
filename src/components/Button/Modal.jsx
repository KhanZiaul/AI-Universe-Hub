import React from 'react';

const Modal = (props) => {
    console.log(props.modalDataIs)
    const { description, image_link , input_output_examples , features , integrations , pricing } = props.modalDataIs;
    return (
        <>

            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                <div className='flex justify-between p-4'>
                        <div className='w-[45%]'>
                            <h2 className='text-xl font-bold'>{description}</h2>
                            <div>

                            </div>
                        </div>
                        <div className='w-[45%]'>
                          <img src={image_link ? image_link[0] : 'No image found'} alt="" />
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;


