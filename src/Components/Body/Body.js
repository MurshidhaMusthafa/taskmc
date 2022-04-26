import React from "react";


import {
  Button,
  Rating,
  Breadcrumbs,
  Link,
  Container,
  Divider,
} from "@mui/material";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Body.css";

const Body = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="1" color="inherit" href="/">
      Cigars
    </Link>,
    <Link underline="hover" key="1" color="inherit" href="/">
       Cohiba Blue Robusto 20 Ct. Box 5.50X50
    </Link>,
    
  ];

  return (
    <Container maxWidth="xl">
      <div className="breadcumbs">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <div className="body-main-parent">
        <div className="body-main">
          {/* 1st Section */}
          <div className="body-sidebar">
            <div className="box1-p">
              <img
                src="pic1.png"
                alt=""
                className="box1"
                width={55}
                height={55}
              />
            </div>
            <div className="box1-p">
              <img
                src="pic2.png"
                alt=""
                className="box2"
                width={55}
                height={55}
              />
            </div>
            <div className="box1-p">
              <img
                src="pic3.png"
                alt=""
                className="box3"
                width={55}
                height={55}
              />
            </div>
            <div className="box1-p">
              <img
                src="pic4.png"
                alt=""
                className="box4"
                width={55}
                height={55}
              />
            </div>
          </div>

          {/* 2 nd Section */}
          <div className="product-name"></div>
          <div className="body-second-box">
            <img src="main.png" className="main-image" alt="" />
            <div className="lady-dot-rounded">
              <div className="round-1"></div>
              <div className="round-2"></div>
              <div className="round-3"></div>
              <div className="round-4"></div>
            </div>
          </div>

          {/* 3 rd section */}
          <div className="body-third-box">
            <div className="body-third-box-heading">
              <h6>Cohiba</h6>
              <h3> Corona Crystal</h3>
            </div>
            <div className="product-id"></div>
            <div style={{ marginBottom: "15px" }}>
              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                style={{ color: "4978E8" }}
                />
              </div>
              <div className="product-description"> 
              <b>Product Description:</b> <br/>
               Cohiba Crystal Corona Tube Cigars; this natural Cigar is a medium bodied cigar with warm buttery flavors of butterscotch, each cigar encased in its own crystal tubo humidor.</div>
            
            

            <div className="size-parent">
              <div className="stock-heading">In Stock</div>
              <div className="stocks">
               Case qty: &nbsp; <button variant="outlined" className="stock-button" >
                  Case 6
                </button>
                <button variant="outlined" className="stock-button">
                  Case 12
                </button>
                
              </div>
            </div>

          
            

            
            
                
                  
                
                    
            
             
              <div className="bottom-sec-2">
                
              
                </div>
                
              
            </div>
            
          

          {/* 4th section */}

          <div className="body-fourth-box">
            <div className="fourth-box-1">
              <div className="con1">
                <div className="con1-text"><b>$70.00 </b>   <strike> $87.00</strike> </div> <br></br>
                <div className="yellowbox">10%off</div>
              </div>
              <div className="con2">
                <div className="con2-sec1">
                  <div className="con2-sec1-1">
                    <div className="con2-sec1-1-cart"></div>
                    <div style={{ marginBottom: "5px" }}>
                      <h5>Tax : </h5>
                      
                    </div>
                    <button className="add-cart">Add to cart</button>
                    <button className="wishlist">Add to Wishlist</button>
                  </div>
                  
                </div>
                
              </div>
              <div className="con3">
                <div className="con3-text">
                <div style={{ marginBottom: "15px" }}></div>
                  <a href="#" style={{ color: "#7A3304" }}>
                  Other offers starting at $91.00
                  </a>
                </div>
              </div>
            </div>

            <div className="delivery">
              <div className="delivery-sec1">
              
              </div>
              <div className="delivery-sec-1-heading">Sold by : </div>
              <div className="delivery-sec1-1-heading">Cohiba Enterprices </div>
            </div>
            
            

            <div className="delivery-sec1-1-heading">Seller Rating:
            
                  <Rating  defaultValue={4} /></div>
                
                <div>
              <a href="#" style={{ color: "#7A3304", fontSize: "16px" }}>
                Seller Information
              </a>
            </div>
           
             
            
          </div>
        </div>

        
        <div className="rec-product-heading"  >Recommended</div>
          <div className="rec-products"   >
            <div className="rec-products-list" >
              <Card style={{width:"162"  }} >
                <Card.Img variant="top" src="pic5.png" className="rec-pic"  />
                <Card.Body>
                  <Card.Title className="rec-products-name"  >Cuban Rounds Churchill Maduro 20 Ct. Bundle 7.00X48</Card.Title>
                </Card.Body>
              </Card>
            </div>
  
            <div className="rec-products-list">
              <Card style={{ width: "162" }}>
                <Card.Img variant="top" src="pic6.png" className="rec-pic" />
                <Card.Body>
                  <Card.Title  className="rec-products-name">Acid Krush Morado Maduro 5/10 Tins 4.00X32</Card.Title>
                </Card.Body>
                
              </Card>
            </div>
  
            <div className="rec-products-list1">
              <Card style={{ width: "162" }}>
                <Card.Img variant="top" src="pic7.png" className="rec-pic" />
                <Card.Body>
                  <Card.Title  className="rec-products-name">Cohiba Connecticut Toro 20 Ct. Box 6.50x52</Card.Title>
                </Card.Body>
                
              </Card>
            </div>
  
            <div className="rec-products-list">
              <Card style={{ width: "162" }}>
                <Card.Img variant="top" src="pic8.png" className="rec-pic" />
                <Card.Body>
                  <Card.Title  className="rec-products-name">Amira Aftershock W/Magna Technology Blue/Blue 1 Hose (2 Hose Capacity) 19"</Card.Title>
                </Card.Body>
               
              </Card>
              </div>
              <div className="rec-products-list">
              <Card style={{ width: "162" }}>
                <Card.Img variant="top" src="pic9.png" className="rec-pic" />
                <Card.Body>
                  <Card.Title  className="rec-products-name">Dr. Grabow Pipes Dr. Grabow Omega</Card.Title>
                </Card.Body>
                
              </Card>
            </div>
          </div>
        
      </div>
    </Container>
  );
};

export default Body;
