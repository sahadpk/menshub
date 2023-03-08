import React from 'react'
import '../Homepage/Home.css'
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image0 from '../Homepage/images/sliderimage.png'
import image1 from '../Homepage/images/kids.jpg'
import image2 from '../Homepage/images/men.jpg'
import image3 from '../Homepage/images/women.jpg'
import image4 from '../Homepage/images/shoes.jpg'
import image5 from '../Homepage/images/bag1.jpg'




function Home() {
    return (
        <>
     

      <div className='slider-main'>
       
       <div className='img'>
          <img src={image0} alt="" />
          
          <h1>Fashion Hub</h1>
          <span>Fashion store</span>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ratione minima molestiae nulla
           <b></b>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
           <b></b> Illo quasi nobis illum! Omnis deserunt quo earum quidem natus esse, illum dolores, blanditiis veritatis dicta rem nihil ipsa, quibusdam tempora magnam ullam est. Eos, earum. Esse sint, consectetur 
           repellendus aliquid asperiores sunt vitae, ducimus ratione corporis eius harum minima consequuntur reiciendis.
          </p>
          <Link to="/ProductPage"><button>SHOP NOW</button></Link>
       </div>
       
 </div>
 
<div className='catmain'>

<Row>
<Col>
<img src={image1} alt="" />
<h2>KIDS</h2>
</Col>
<Col>
<img src={image2} alt="" />
<h2>MENS</h2>
</Col>
<Col>
<img src={image3} alt="" />
<h2>WOMENS</h2>
</Col>
<Col>
<img src={image4} alt="" />
<h2>SHOES</h2>
</Col>
<Col>
<img src={image5} alt="" />
<h2>BAGS</h2>
</Col>
</Row>


</div>
<div className='shopmain'>
       
       <h1>TRENDING</h1>   
       
        <div className='card-main'>
          
    <Container>
      
      <Row>
        <Col>
        <img src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhc2hpb258ZW58MHx8MHx8&w=1000&q=80" alt="" />
        <p>Fashion</p>
        <h4>$124.00</h4>
        <h5>price:$114</h5>
        </Col>
        <Col>
         <img src="https://thumbs.dreamstime.com/b/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg" alt="" />
         <p>Fashion</p>
         <h4>$124.00</h4>
         <h5>price:$114</h5>
        </Col>
        <Col>
        <img src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhc2hpb258ZW58MHx8MHx8&w=1000&q=80" alt="" />
        <p>Fashion</p>
        <h4>$124.00</h4>
        <h5>price:$114</h5>
        </Col>
      </Row>
    </Container>

        </div>
        <div className='card-main2'>
        <Container>
      
      <Row>
        <Col>
        <img src="https://assets.vogue.com/photos/63d14dac04605e2e780f9798/3:4/w_1024%2Cc_limit/HD_CHANEL_VirgileGuinard-%252012.jpeg" alt="" />
        <p>Fashion</p>
        <h4>$124.00</h4>
        <h5>price:$114</h5>
        </Col>
        <Col>
         <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
         <p>Fashion</p>
         <h4>$124.00</h4>
         <h5>price:$114</h5>
        </Col>
        <Col>
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        <p>Fashion</p>
        <h4>$124.00</h4>
        <h5>price:$114</h5>
        </Col>
      </Row>
    </Container> 
        </div>
        <div className='view-btn'>
          <Link to="/ProductPage"><button>VIEW MORE</button></Link>
            
        </div>
        <div className="shop-main2">
              <h1>NEW ARRIVALS</h1>
              
              <Container>
      
      <Row>
        <Col>
        <img src="https://m.media-amazon.com/images/I/61v2fQi4rVL._UL1500_.jpg" alt="" />
        <p>Fashion</p>
        <h4>$114.00</h4>
        <button>Add To Cart</button>
        </Col>
        <Col>
         <img src="https://thumbs.dreamstime.com/b/gorgeous-woman-red-dress-studio-picture-white-background-gorgeous-woman-red-dress-studio-picture-white-background-female-155295960.jpg" alt="" />
         <p>Fashion</p>
         <h4>$114.00</h4>
         <button>Add To Cart</button>
        </Col>
        <Col>
        <img src="https://i.pinimg.com/170x/17/1b/f1/171bf1133abc78b49a446f2f3c51fb23.jpg" alt="" />
        <p>Fashion</p>
        <h4>$114.00</h4>
        <button>Add To Cart</button>
        </Col>
        <Col>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6XDmzkFxV4NN7v127J20gqhGb06S8aIl5fw&usqp=CAU" alt="" />
        <p>Fashion</p>
        <h4>$114.00</h4>
        <button>Add To Cart</button>
        </Col>
      </Row>
    </Container>
        </div>
        <div className='dealsec'>
            <h1>DEAL OF THE DAY</h1>
           </div>
           <div className='brands'>
            <hr />
           
      <Row>
        <Col><img src="http://ps.magentech.com/themes/sp_market2/img/m/20.jpg" alt="" /></Col>
        <Col><img src="http://ps.magentech.com/themes/sp_market2/img/m/21.jpg" alt="" /></Col>
        <Col><img src="	http://ps.magentech.com/themes/sp_market2/img/m/22.jpg" alt="" /></Col>
        <Col><img src="http://ps.magentech.com/themes/sp_market2/img/m/23.jpg" alt="" /></Col>
        <Col><img src="http://ps.magentech.com/themes/sp_market2/img/m/24.jpg" alt="" /></Col>
        <Col><img src="http://ps.magentech.com/themes/sp_market2/img/m/25.jpg" alt="" /></Col>
      </Row>
             <hr />
           </div>
        

           <div className='footer-one'>
            <Container>
           <Row>
        <Col>
        <h6>CONTACT US</h6>
        <hr />
        <p>Address: No 40 Baria Sreet 133/2 NewYork City, NY,
        
           United States</p>
           <p>Email: contact@market.com</p>
           <p>Phone: 0123456789</p>
        
         
        
        </Col>
        <Col>
        <h6>INFORMATION</h6>

        <hr />
        <p>About us</p>
        <p>My Account</p>
        <p>Privacy Policies</p>
        <p>Terms & Conditions</p>
        <p>Delivery Information</p>
        <p> Customer Feedback</p>
        
        </Col>
        <Col>
        <h6>CUSTOMER SERVICE</h6>
        <hr />
        <p>About us</p>
        <p>My Account</p>
        <p>Privacy Policies</p>
        <p>Terms & Conditions</p>
        <p>Delivery Information</p>
        <p> Customer Feedback</p>
        </Col>
        <Col>
        <h6>PAYMENT AND SHIPPING</h6>
        <hr />
        <p>About us</p>
        <p>My Account</p>
        <p>Privacy Policies</p>
        <p>Terms & Conditions</p>
        <p>Delivery Information</p>
        <p> Customer Feedback</p>
        </Col>
       
      </Row>
      </Container>             
           </div>
        </div>

</>

    )
  }
  
  export default Home