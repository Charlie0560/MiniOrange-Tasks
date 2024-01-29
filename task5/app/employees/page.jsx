import React from 'react'
import "./employees.css"
function Employees() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
        <p className='title'>Employees</p>
       <div className="cardsdiv d-flex">
       <div className="cards">
          <b>Name:</b> Lorem ipsum dolor sit amet.
          <br />
          <b>address</b>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti atque voluptatibus non praesentium neque similique vero facere quo quibusdam.
        </div>
        <div className="cards">
          <b>Name:</b> Lorem ipsum dolor sit amet.
          <br />
          <b>address</b>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti atque voluptatibus non praesentium neque similique vero facere quo quibusdam.
        </div>
        <div className="cards">
          <b>Name:</b> Lorem ipsum dolor sit amet.
          <br />
          <b>address</b>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti atque voluptatibus non praesentium neque similique vero facere quo quibusdam.
        </div>
       </div>
    </main>
  )
}

export default Employees