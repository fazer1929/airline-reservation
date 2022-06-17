import React from 'react'

function AdminDashboard() {
    const innerContainerStyle = {

        'display': 'flex',
        'flex-direction': 'row',
        'width': '70%',
        'justify-content': "space-between",
        "margin": "120px"
    }
    const specialText = {
        'padding': '6px 3px',
        'background': '#fff',
        "border-radius": '3px',
        'color': '#2ecc71'

    }
    return (
        <div className='container'>
            <div className='inner-container' style={innerContainerStyle}>
                <div className='left'>
                    <h1 style={{ 'fontSize': "5rem", 'letterSpacing': "6px" }}>Admin</h1>
                </div>
                <div className='right'>
                    <h4 className='mb-5' >Date: <span style={specialText}>{new Date().toDateString().slice(4)}</span></h4>
                    <h4>Time: <span style={specialText}>{new Date().toLocaleTimeString().slice(0, 5)} {new Date().toLocaleTimeString().slice(8)}</span></h4>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard