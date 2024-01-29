import Link from 'next/link'
import React from 'react'

function navbar() {
  return (<>
  
  <nav class="navbar navbar-expand-sm bg-light">
      <div class="container d-flex justify-content-between">
        <div class="nav-logo">Bootstrap Assignment</div>
        <button
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse flex-row-reverse"
          id="collapsibleNavbar"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" href="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/services">Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}

export default navbar