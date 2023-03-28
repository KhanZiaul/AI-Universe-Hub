import React from 'react';

const Button = (props) => {
    return (
        <>
            <button className="btn btn-primary my-5">{props.children}</button>
        </>
    );
};

export default Button;