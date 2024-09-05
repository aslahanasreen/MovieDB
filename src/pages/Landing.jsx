import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    
        <div className='d-flex justify-content-center align-items-center container-fluid' style={{height:'80vh'}}>
            <div className='w-75 container border shadow text-center p-5'>
                <h1>MOVIES</h1>
                <Link to={'/home'} className='btn btn-outline-primary'>Go To Dashboard</Link>
            </div>

        </div>
    
    </>
  )
}

export default Landing