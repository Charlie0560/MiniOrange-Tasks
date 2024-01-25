import React from 'react'

function Navbar() {
  return (
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
              <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Service</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar