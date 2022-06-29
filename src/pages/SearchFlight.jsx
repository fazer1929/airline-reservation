import React from 'react'
import { useState } from 'react'
import { Badge, NavDropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import flight1 from "../images/flight1.png"
import flight2 from "../images/flight2.png"
import flight3 from "../images/flight3.png"
import flight4 from "../images/flight4.png"
import flight5 from "../images/flight5.png"
import flight6 from "../images/flight6.png"

function SearchFlight() {

  const [source,setSource] = useState("");
  const [destination,setDestination] = useState("");
  const [date,setDate] = useState("");
  const [classType,setClassType] = useState("");




  const formStyle = {
    "width": "80%",
    "background": "#fff",
    "padding": "30px",
    "border-radius": "10px",
    "margin": "auto",
    "paddingBottom": "20px"
  }
  const cardsStyle = {
    "width": "80%",
    "background": "#fff",
    "padding": "30px",
    "border-radius": "10px",
    "margin": "auto",
    "marginTop" :"15px",
    
    "paddingBottom": "20px"
  }
  const containerStyle = {
    "margin":"auto 20px"
  }
    return (

      <div style={containerStyle}>
              <h1 style={{ "color": "#f1f2f6", "marginBottom": "40px", "fontSize": "2.5rem", "letterSpacing": '1.2', 'textAlign':'center', 'paddingTop': "20px" }}>Search Flight</h1>

      <form style={formStyle}>
        <h3>Find Flight</h3>

        <div class="form-group col-md-4">
      <label for="inputState">Source</label>
      <select id="inputState" class="form-control" >
        <option selected>Raipur</option>
        <option>Bilaspur</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Pune</option>
        <option>Banglore</option>
        <option>Raigarh</option>
        <option>Durg</option>

      </select>
    </div>

    <div class="form-group col-md-4">
      <label for="inputState">Destination</label>
      <select id="inputState" class="form-control">
        <option selected>Raipur</option>
        <option>Bilaspur</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Pune</option>
        <option>Banglore</option>
        <option>Raigarh</option>
        <option>Durg</option>

      </select>
    </div>

        
        <div className="form-group col-md-4">
          <label>Depart Date</label>
          <input
            type="date"
            className="form-control"
          />
        </div>

        <div class="form-group col-md-4">
      <label for="inputState">Class</label>
      <select id="inputState" class="form-control">
        <option selected>First Class</option>
        <option>Economy Class</option>
        <option>Bussiness Class</option>
        

      </select>
    </div>




        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>

      </form>

      <form style={cardsStyle}>
      <div class="text-center">

  <div class="card-body">
    <div class="row">
  <div class="col-sm-4">
  <Badge bg="primary">Depart</Badge><br />
  <br />
  <img src={flight1} alt="..." class="img-thumbnail"/>
  <br />

  <NavDropdown
          id="nav-dropdown-dark-example"
          title="Flight Detail "
          menuVariant="dark"
          ></NavDropdown>
    </div>
    <div class="col-sm-4" style={{margin:"auto"}}>

        <Row xs={3}>

          <div>

          <p style={{fontWeight:"700",marginBottom:"2px"}}> DEL 22:55</p>
          <p style={{color:"silver",marginBottom:"2px"}}>New Delhi</p>
          </div>
          <div>

          <p style={{color:"silver",marginBottom:"2px"}}>02h 50m</p>
          < hr style={{margin:"0"}}/>
          <p style={{color:"silver",marginBottom:"2px"}}>Non Stop</p>
          </div>
  <div>

          <p style={{fontWeight:"700",marginBottom:"2px"}}> 22:55 BLR</p>

          <p style={{color:"silver",marginBottom:"2px"}}>Banglore</p>
  </div>
        </Row>

    </div>
    <div class="col-sm-4" style={{margin:"auto"}}>
        <p>Dekhne ka paisa nahi lagta</p>
    <a href="#" class="btn btn-primary">Book Ticket</a>

    </div>
    </div>
  </div>

</div>
      </form>
      <form style={cardsStyle}>
      <div class="text-center">

  <div class="card-body">
    <div class="row">
  <div class="col-sm-4">
  <Badge bg="primary">Depart</Badge><br />
  <br />
  <img src={flight2} alt="..." class="img-thumbnail"/>
    </div>
    <div class="col-sm-4">
    <p>  2 Hour</p>
        <p>Bilaspur __________  Delhi</p>
    </div>
    <div class="col-sm-4">
        <p>Bank Account Check kar k aaya karo</p>
    <a href="#" class="btn btn-primary">Book Ticket</a>

    </div>
    </div>
  </div>

</div>
      </form>
      <form style={cardsStyle}>
      <div class="text-center">

  <div class="card-body">
    <div class="row">
  <div class="col-sm-4">
  <Badge bg="primary">Depart</Badge><br />
  <br />
  <img src={flight3} alt="..." class="img-thumbnail"/>
    </div>
    <div class="col-sm-4">
    <p>  2 Hour</p>
        <p>Swarg __________  Nark</p>
    </div>
    <div class="col-sm-4">
        <p>Galat jagha aa gaye ho</p>
    <a href="#" class="btn btn-primary">Book Ticket</a>

    </div>
    </div>
  </div>

</div>
      </form>
      <form style={cardsStyle}>
      <div class="text-center">

  <div class="card-body">
    <div class="row">
  <div class="col-sm-4">
  <Badge bg="primary">Depart</Badge><br />
  <br />
  <img src={flight4} alt="..." class="img-thumbnail"/>
    </div>
    <div class="col-sm-4">
    <p>  2 Hour</p>
        <p>Narak __________  Swarg</p>
    </div>
    <div class="col-sm-4">
        <p>Agla Dekh</p>
    <a href="#" class="btn btn-primary">Book Ticket</a>

    </div>
    </div>
  </div>

</div>
      </form>
      <form style={cardsStyle}>
      <div class="text-center">

  <div class="card-body">
    <div class="row">
  <div class="col-sm-4">
  <Badge bg="primary">Depart</Badge><br />
  <br />
  <img src={flight5} alt="..." class="img-thumbnail"/>
    </div>
    <div class="col-sm-4">
    <p>  2 Hour</p>
        <p>Idhar  __________  Udhar</p>
    </div>
    <div class="col-sm-4">
        <p>Tumse Na ho Paaye ka</p>
    <a href="#" class="btn btn-primary">Book Ticket</a>

    </div>
    </div>
  </div>

</div>
      </form>

      </div>
    )
  }

  export default SearchFlight;