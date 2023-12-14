import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function MainNav({ brand, leftLinks, rightLinks }) {
  return (


    // Create a full-width navbar. 
    <Navbar expand="lg" className="bg-success navbar-dark">                  
        
        {/* Content takes up full width of screen */}
        <Container fluid>

          {/* Add a brand */}
          <Navbar.Brand href="/">{brand} </Navbar.Brand> 

          {/* Component used to create toggle button to represent navigation menu (hamburger menu) */}          
          <Navbar.Toggle />

          {/* Component used to wrap content that should be collapsed on smaller screens */}
          <Navbar.Collapse>


          {/* Put', 'About', 'Contact', 'Shop' on left hand side of the Navbar */}
          <Nav className="me-auto">
            {leftLinks.map(({ url, text }, index) => (
              <Nav.Link key={index} href={url}>
                {text}
              </Nav.Link>
            ))}
          </Nav>

          {/* Login', 'Favorite Melons', 'Settings', 'Profile' on right hand side of the Navbar */}    
          <Nav>
            {rightLinks.map(({ url, text }, index) => (
              <Nav.Link key={index} href={url}>
                {text}
              </Nav.Link>
            ))}
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
