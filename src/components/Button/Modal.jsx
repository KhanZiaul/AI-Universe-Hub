import React from 'react';

const Modal = (props) => {
    console.log(props.modalDataIs)
    const { description, image_link, input_output_examples, features, integrations, pricing, accuracy } = props.modalDataIs;
    return (
        <>

            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='flex justify-between p-4'>
                        <div className='w-[45%]'>
                            <h2 className='text-xl font-bold'>{description}</h2>
                            <div className='flex justify-between my-4'>

                                <div className='text-left'>
                                <h2 className='text-xl font-bold'>Features : </h2>
                                {
                                    Object.values(features? features : 'No features found').map((feature,index) =>{
                                        return (
                                            <p key={index}>{feature.feature_name}</p>
                                        )
                                    })
                                }
                                </div>

                                <div className='text-left'>
                                    <h2 className='text-xl font-bold'>Integrations : </h2>
                                    {
                                        integrations ? integrations.map((feature) => {
                                            return (
                                                <ul>
                                                    <li>{feature}</li>
                                                </ul>
                                            )
                                        }) : 'no integrations found'
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='w-[45%]'>
                            <div className='relative'>
                                <img src={image_link ? image_link[0] : 'No image found'} alt="" />
                                <h2 className='my-2 text-2xl font-bold'>{input_output_examples ? input_output_examples[0].input : 'Can you give any example?'}</h2>
                                <p className='my-2'>{input_output_examples ? input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</p>
                                <div className='absolute top-0 right-0 border-2 bg-orange-500 p-1 text-white'>
                                    {accuracy ? accuracy.score : false}
                                </div>
                            </div>
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


