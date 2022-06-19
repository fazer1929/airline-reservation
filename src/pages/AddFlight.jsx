import React from 'react'
import { Link } from 'react-router-dom'
import TimePicker from 'react-bootstrap-time-picker'
function AddFlight() {
    const formStyle = {
        "width": "55%",
        "background": "#fff",
        "padding": "30px",
        "border-radius": "10px",
        "margin": "auto",
        "paddingBottom": "20px"
    }
    const containerStyle = {
        "margin": "auto 20px",
        "padding": "10px"
    }
    return (

        <div style={containerStyle} className="mb-5">
            <h1 style={{ "color": "#f1f2f6", "marginBottom": "40px", "fontSize": "2.5rem", "letterSpacing": '1.2', 'textAlign': 'center', 'paddingTop': "20px" }}>Add Flight</h1>

            <form style={formStyle} className="mb-5">
                <div className="mb-3">
                    <label>Flight No.</label>
                    <input required
                        type="text"
                        className="form-control"
                        placeholder="Flight Number"
                    />
                </div>

                <div className="mb-3">
                    <label>Flight Name</label>
                    <input required
                        type="text"
                        className="form-control"
                        placeholder="Flight Name"
                    />
                </div>

                <div className="mb-3">
                    <label>Departure Time</label>
                    <TimePicker />
                </div>
                <div className="mb-3">
                    <label>Arrival Time</label>
                    <TimePicker />
                </div>

                <div className="mb-3">
                    <label>Source City</label>
                    <input required
                        type="text"
                        className="form-control"
                        placeholder="Source City"
                    />
                </div>
                <div className="mb-3">
                    <label>Destination City</label>
                    <input required
                        type="text"
                        className="form-control"
                        placeholder="Destination City"
                    />
                </div>
                <div className="mb-4">
                    <label>No of Seats</label>
                    <input required type="number" className="form-control" placeholder="Enter total number of seats" max="500" maxLength={3} />
                </div>
                <div className="mb-4">
                    <label>Flight Classes</label><br />

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="flightClass1" value="First Class" />
                        <label class="form-check-label" for="flightClass1">First Class</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="flightClass2" value="Business Class" />
                        <label class="form-check-label" for="flightClass2">Business Class</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="flightClass3" value="Economy Class" />
                        <label class="form-check-label" for="flightClass3">Economy Class</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label>Flying Days</label><br />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="weekDay1" value="MON" />
                        <label class="form-check-label" for="weekDay1">Monday</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="weekDay2" value="TUE" />
                        <label class="form-check-label" for="weekDay2">Tuesday</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="weekDay3" value="WED" />
                        <label class="form-check-label" for="weekDay3">Wednesday</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="weekDay4" value="THU" />
                        <label class="form-check-label" for="weekDay4">Thursday</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="weekDay5" value="FRI" />
                        <label class="form-check-label" for="weekDay5">Friday</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="weekDay6" value="SAT" />
                        <label class="form-check-label" for="weekDay6">Saturday</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="weekDay7" value="Sun" />
                        <label class="form-check-label" for="weekDay7">Sunday</label>
                    </div>
                </div>

                <div className="d-grid mt-3">
                    <button type="submit" className="btn btn-primary">
                        Add Flight
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddFlight