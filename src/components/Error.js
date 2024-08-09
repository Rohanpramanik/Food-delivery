import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className='error'>
            <h1>Oops!!</h1>
            <h2>You open the wrong door</h2>
            <h2>you are not supposed to be here</h2>
            {/* <h2>{err.status} : {err.statusText}</h2> */}
            <h3 style={{color:"red"}}>I think you came because of {err.data}</h3>
        </div>
    )
}

export default Error;