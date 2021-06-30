import react from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar() {
    return(
        <Navbar className="topnav">
            <Navbar.Brand>K-Store</Navbar.Brand>
        <Nav className="justify-content-end">
            <a className="active" href="/">Store</a>
            <a href="/components/pages/Products.js">Productos</a>
            <a href="/components/pages/Cart.js">Cart</a>
        </Nav>

        </Navbar>


    )
}