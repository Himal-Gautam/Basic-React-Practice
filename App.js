import './App.css';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { ContentCards } from './ContentCards';

function App() {

  const carddata= [[1,1,1,1,0,0,0,0,0],[1,1,1,1,1,1,1,0,9],[1,1,1,1,1,1,1,1,49]]

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          
          <Navbar.Brand href="#home" id="brand">
            <img
              alt=""
              src="https://startbootstrap.com/assets/img/sb-logo.svg"
              width="70"
              height="70"
              className="d-inline-block align-top"
            />
            <h3>Start Bootstrap</h3>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Theme ></Nav.Link>
                <Nav.Link href="#">Templates ></Nav.Link>
                <Nav.Link href="#">Bundles ></Nav.Link>
                <Nav.Link href="#">Forms</Nav.Link>
                <Nav.Link href="#">Resources ></Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <div className="login">
              <Button size="medium">Blog</Button>
              <Button variant="contained" color="error">Login</Button>
            </div>
        </Container>
      </Navbar>

      <div className="orange_heading">
        <h1>Bootstrap Responsive Pricing Table Snippet</h1>
        <p>Pricing table with Custom Hover Effects and Buttons</p>
      </div>

      <div className="content-base">
        <div className="head">
          <ul>
            <li>Result</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="content">
         { carddata.map((item) => (
            <ContentCards cost={item}/>
         ))}
        </div>
      </div>        
    
    </div>
  );
}

export default App;



