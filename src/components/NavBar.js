import react from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function NavBar() {
    return(
        <Navbar className="topnav" fixed="top">
            <Navbar.Brand className="justify-content-left">K-Store</Navbar.Brand>
        <Nav>
            <NavDropdown title="Categorías">
                <NavDropdown.Item href="#category1">Beers</NavDropdown.Item>
                <NavDropdown.Item href="#category2">Ducks</NavDropdown.Item>
                <NavDropdown.Item href="#category3">Stars</NavDropdown.Item>
            </NavDropdown>
            <a href="/components/pages/Products.js">Productos</a>
            <a href="/components/pages/Cart.js">Cart</a>
        </Nav>
        </Navbar>



    )
}