import React, { useState } from 'react'
import { Table } from 'react-bootstrap';

function CancelTicket() {
    const [PNR, setPNR] = useState("");
    const [data, setData] = useState(
        {
            "flight-name": "Durg-ka-safar",
            "flight-no": "F12032",
            "source": "Raipur",
            "destination": "Banglore",
            "arrival": "12:00PM",
            "departure": "06:00PM",
            "working-days": "Mon, Wed, Thur",
            "classes": "economy, buisness"
        }
    );
    const formStyle = {
        "minWidth": "55%",
        "maxWidth": "80%",
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


    const searchPNR = () => {

    }
    return (
        <>
            <div style={containerStyle} className="mb-5">
                <h1 style={{ "color": "#f1f2f6", "marginBottom": "40px", "fontSize": "2.5rem", "letterSpacing": '1.2', 'textAlign': 'center', 'paddingTop': "20px" }}>Cancel Reservation</h1>

                <form style={formStyle} className="mb-5">
                    <div className="mb-4">
                        <label>PNR Number</label>
                        <input required type="number" onChange={e => setPNR(e.target.value)} className="form-control" placeholder="Enter PNR number to know ticket status" max="500" maxLength={3} />
                    </div>

                    <div className="d-grid mt-3">
                        <button className="btn btn-primary" onClick={() => searchPNR()}>
                            Cancel Ticket
                        </button>
                    </div>
                </form>
            </div>



            {data && <div style={formStyle} className="mb-5">
                <div className="mb-4">
                    <h4>Flight for PNR  {PNR}</h4>
                </div>
                <Table className='mb-5' striped bordered hover>
                    <thead>
                        <tr>
                            <th>Flight No</th>
                            <th>Flight Name</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Classes</th>
                            <th>Flying Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>{data['flight-no']}</td>
                            <td>{data['flight-name']}</td>
                            <td>{data['source']}</td>
                            <td>{data['destination']}</td>
                            <td>{data["departure"]}</td>
                            <td>{data["arrival"]}</td>
                            <td>{data["classes"]}</td>
                            <td>{data["working-days"]}</td>
                        </tr>

                    </tbody>
                </Table>
                <button className="btn btn-danger" onClick={() => searchPNR()}>
                    Confirm Cancel
                </button>
            </div>}
        </>
    )
}

export default CancelTicket