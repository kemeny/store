import react from 'react'
import Navbar from 'react-bootstrap/Navbar' 
import Nav from 'react-bootstrap/Nav'

export default function NavBar() {
    return(
<div className="topnav">
    <a className="active" href="/">Store</a>
    <a href="/components/pages/Products.js">Productos</a>
    <a href="/components/pages/Cart.js">Cart</a>
</div>



    )
}