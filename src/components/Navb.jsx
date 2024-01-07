import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from'react-bootstrap/NavLink';
import { useShoppingCart } from '../context/ShoppingCartContext';


const Navb =() =>{
  const {openCart,cartQuantity}=useShoppingCart();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>home</Nav.Link>
            <Nav.Link to="/about" as={NavLink}>about</Nav.Link>
            <Nav.Link to="/store" as={NavLink}>store</Nav.Link>
          </Nav>
<button variant="outline-primary"
className="rounded-circle"
style={{width:"3rem",height:"3rem" ,position:"relative"}}
onClick={openCart}
>
<svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
  </svg>
  </button>
          <Nav>
<Nav.Link href="#deets">Panier 
<div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
style={{
  position:"absolute",
  color:"black",
  width:"1.5rem",
  height:"1.5rem",
  bottom:"0",
  right:"365px",
  transform:"translate(25% ,25%)",

}}
>
 {cartQuantity}
</div>
</Nav.Link>
        
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;