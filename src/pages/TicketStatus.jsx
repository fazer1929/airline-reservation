import React, { useState } from 'react'

function TicketStatus() {
    const [PNR, setPNR] = useState("");
    const [status, setStatus] = useState("");

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
    const searchPNR = () => {

    }
    return (
        <>
            <div style={containerStyle} className="mb-5">
                <h1 style={{ "color": "#f1f2f6", "marginBottom": "40px", "fontSize": "2.5rem", "letterSpacing": '1.2', 'textAlign': 'center', 'paddingTop': "20px" }}>Ticket Status</h1>

                <form style={formStyle} className="mb-5">
                    <div className="mb-4">
                        <label>PNR Number</label>
                        <input required type="number" onChange={e => setPNR(e.target.value)} className="form-control" placeholder="Enter PNR number to know ticket status" max="500" maxLength={3} />
                    </div>

                    <div className="d-grid mt-3">
                        <button className="btn btn-primary" onClick={() => searchPNR()}>
                            See status
                        </button>
                    </div>
                </form>
            </div>



            {status && <div style={formStyle} className="mb-5">
                <div className="mb-4">
                    <h4>Ticket Status for {PNR}</h4>
                    <h3>{status}</h3>
                </div>

            </div>}
        </>
    )
}

export default TicketStatus