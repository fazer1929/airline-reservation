import React from "react";
import AirplanesPlus from "../images/AirplanesPlus.png";

function About(){
    return(
        <div>
        
<div class="bg-light">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
        <h1 class="display-3">Airline Reservation System</h1>
        <p class="lead text-muted mb-0">This system is built for user to directly access the system online to book tickets. The user can book, print, cancel tickets.</p>
        <p class="lead text-muted mb-0">The administrator has control over the adding flights available for booking and has control over removing flights that are not necessary.</p>
        <p class="lead text-muted mb-0">The administrator and user can both enter the system using their respective login details.</p>
      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src={AirplanesPlus} alt="" class="img-fluid"/></div>
    </div>
  </div>
</div>

{/* the commented code below will help in adding new content in the about page */}

{/* <div class="bg-white py-5">
  <div class="container py-5">
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
        <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
      <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
        <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
    </div>
  </div>
</div> */}

<div class="bg-light py-8">
  <div class="container py-1">
    <div class="row mb-4">
      <div class="col-lg-5">
        <h2 class="display-4 font-weight-light">Our team</h2>
        <p class="font-italic text-muted">Meet our team members</p>
      </div>
    </div>

    <div class="row text-center">
      {/* <!-- Team item--> */}
      <div class="col-xl col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Abhay Choudhary</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
        </div>
      </div>
      {/* <!-- End--> */}

      {/* <!-- Team item--> */}
      <div class="col-xl col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Adarsh Chouhan</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
        </div>
      </div>
      {/* <!-- End--> */}

      {/* <!-- Team item--> */}
      <div class="col-xl col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Kumkum Soni</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
        </div>
      </div>
      {/* <!-- End--> */}

      {/* <!-- Team item--> */}
      <div class="col-xl col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Sahil Kohad</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
        </div>
      </div>
      {/* <!-- End--> */}

      {/* <!-- Team item--> */}
      <div class="col-xl col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Subhrajit Nath</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
        </div>
      </div>
      {/* <!-- End--> */}

    </div>
  </div>
</div>

        </div>
    )
}

export default About;