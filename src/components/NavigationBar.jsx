import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavigationBar() {
    const AdminNav = () => {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Airline Reservation</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/admin/add-flight" > Add Flight</Nav.Link>
                        <Nav.Link href="/admin/see-flights" >See Flights</Nav.Link>
                        <Nav.Link href="#pricing" className='text-danger'>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }

    const UserNav = () => {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Airline Reservation</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/admin" > Search Flights</Nav.Link>
                        <Nav.Link href="#features" >Airline Ticket</Nav.Link>
                        <Nav.Link href="#pricing" >Ticket Status</Nav.Link>
                        <Nav.Link href="#pricing" className='text-white'>About Us</Nav.Link>
                        <Nav.Link href="#pricing" className='text-danger'>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
    return <>
        {AdminNav()}

    </>
}


export default NavigationBar