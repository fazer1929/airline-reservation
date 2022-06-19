import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { RiDeleteBin5Line, RiEditLine } from 'react-icons/ri'
function SeeFlights() {

    const formStyle = {
        "min-width": "60%",
        "background": "#fff",
        "padding": "30px",
        "border-radius": "10px",
        "margin": "auto",
        "paddingBottom": "20px"
    }
    const containerStyle = {
        "margin": "auto 20px"
    }
    const sampleData = [
        {
            "flight-name": "Durg-ka-safar",
            "flight-no": "F12032",
            "source": "Raipur",
            "destination": "Banglore",
            "arrival": "12:00PM",
            "departure": "06:00PM",
            "working-days": "Mon, Wed, Thur",
            "classes": "economy, buisness"
        },
        {
            "flight-name": "Durg-ka-safar",
            "flight-no": "F12032",
            "source": "Raipur",
            "destination": "Banglore",
            "arrival": "12:00PM",
            "departure": "06:00PM",
            "working-days": "Mon, Wed, Thur",
            "classes": "economy, buisness"
        },
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
    ]
    return (

        <div style={containerStyle}>
            <h1 style={{ "color": "#f1f2f6", "marginBottom": "40px", "fontSize": "2.5rem", "letterSpacing": '1.2', 'textAlign': 'center', 'paddingTop': "20px" }}>Flight Details</h1>
            <div style={formStyle}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Flight No</th>
                            <th>Flight Name</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Classes</th>
                            <th>Flying Days</th>
                            <th>       </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sampleData.map((data, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{data['flight-no']}</td>
                                    <td>{data['flight-name']}</td>
                                    <td>{data['source']}</td>
                                    <td>{data['destination']}</td>
                                    <td>{data["departure"]}</td>
                                    <td>{data["arrival"]}</td>
                                    <td>{data["classes"]}</td>
                                    <td>{data["working-days"]}</td>
                                    <td style={{ "display": "flex", "justifyContent": 'space-between' }} >
                                        <button style={{ "border": "none", "background": "none" }} className='text-primary'><RiEditLine /></button>


                                        <button style={{ "border": "none", "background": "none" }} className='text-danger'><RiDeleteBin5Line /></button>

                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default SeeFlights