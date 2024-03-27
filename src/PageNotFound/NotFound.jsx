import React, { useEffect, useState } from 'react'
import '../PageNotFound/NotFound.css'
import Nav from '../Nav/Nav'
const NotFound = () => {



  return (
    <>
    <Nav/>
    <div className='pagenotfound'>
        <h1>There is nothing here ...</h1>
            <img draggable='false' src="https://i.ibb.co/PGHnVVd/2FFk.gif" alt="" id='notfoundimg' />
        </div>
        </>
  )
}

export default NotFound