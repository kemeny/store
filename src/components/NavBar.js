import react from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar() {
    return(
        <Navbar className="topnav" fixed="top">
            <Navbar.Brand className="justify-content-left">K-Store</Navbar.Brand>
        <Nav>
            <a href="/">Store</a>
            <a href="/components/pages/Products.js">Productos</a>
            <a href="/components/pages/Cart.js">Cart</a>
        </Nav>
        </Navbar>



    )
}