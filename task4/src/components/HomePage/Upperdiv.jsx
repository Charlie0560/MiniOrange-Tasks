import React from 'react'
import Counter from '../Counter/Counter'


function Upperdiv() {
  return (
    <div>
        <div class="container-fluid upper-div">
      <div
        class="container d-flex align-items-center flex-column middlediv text-white"
      >
        <p class="heading">Landing Page</p>
        <p class="small-heading">A Template by Start Bootstrap</p>
        <hr class="color-white horiline" />
        <Counter/>  

        <br />
        <div class="buttonsdiv col-gap">
          <div class="btn btn-light footerbtns">
            <i class="fa-brands fa-twitter"></i> TWITTER
          </div>

          <div class="btn btn-light footerbtns">
            <i class="fa-brands fa-github"></i> GITHUB
          </div>
          <div class="btn btn-light footerbtns">
            <i class="fa-brands fa-linkedin"></i> LINKEDIN
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Upperdiv