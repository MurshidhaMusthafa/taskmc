import React from "react";
import { IoCart } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
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
          <div className="product-name">ABCDED</div>
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
            <div className="product-id">Product Id 2CDE283001R0100</div>
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

          
            

            
            
                
                  
                
                    
            <div style={{ display: "flex", marginTop: "20px" }}>
              <div className="bottom-sec-1">
                <div className="bottom-sec-1-heading">Sold By</div>
                <div className="bottom-sec-1-heading">Seller Rating</div>
              </div>
              <div className="bottom-sec-2">
                <div style={{ marginBottom: "14px" }}>
                  <a href="#" style={{ color: "#0A6EBC" }}>
                    Seller One
                  </a>
                </div>
                <div>
                  <Rating name="size-medium" defaultValue={4} />
                </div>
              </div>
            </div>
            <div>
              <a href="#" style={{ color: "#0A6EBC", fontSize: "16px" }}>
                Seller Information
              </a>
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
                    <div className="con2-sec1-1-dollars">$67.00</div>
                    <div style={{ marginBottom: "5px" }}>
                      <a href="#" style={{ color: "#0A6EBC" }}>
                        Seller Two
                      </a>
                    </div>
                    <div className="con2-sec1-1-ship">
                      Free Shipping (Standard)
                    </div>
                  </div>
                  <div className="con2-sec1-2">
                    <IoCart color="white" />
                  </div>
                </div>
                <div className="con2-sec2">
                  <div className="con2-sec1-1">
                    <div className="con2-sec1-1-dollars">$65.50</div>
                    <div style={{ marginBottom: "5px" }}>
                      <a href="#" style={{ color: "#0A6EBC" }}>
                        Seller Three
                      </a>
                    </div>
                    <div className="con2-sec1-1-ship">
                      Shipping $5.99 (Express)
                    </div>
                  </div>
                  <div className="con2-sec1-2">
                    <IoCart color="white" />
                  </div>
                </div>
              </div>
              <div className="con3">
                <div className="con3-text">
                  <a href="#" style={{ color: "#0A6EBC" }}>
                    Other offers starting at $91.00
                  </a>
                </div>
              </div>
            </div>

            <div className="delivery">
              <div className="delivery-sec1">
                <MdLocalShipping />
              </div>
              <div className="delivery-sec1-1">Shipping Options:</div>
            </div>

            <div className="delivery1" >
              <div className="delivery1-sec2">
                Before Oct 14 - <b>$5.99</b>
              </div>
              <div>
                <a
                  href="#"
                  style={{
                    color: "#0A6EBC",
                    marginLeft: "10px",
                    fontWeight: "500",
                    fontSize: "16px",
                    marginTop: "10px",
                  }}
                >
                  Select Express
                </a>
              </div>
            </div>
            <div className="delivery2" >
              After Oct-14 - <b>FREE</b> (Standard Shipping)
            </div>
          </div>
        </div>

        <div className="description">
          <div className="heading">
            Description
          </div>
          <div className="description-content">
            The Women Solid Color Waterfall Neck Knitted Cardigan is made out of
            soft knit fabric. This cardigan features a waterfall neck and solid
            color. A perfect option for your casual occasion. Take a look at our
            store "Nlife LLC", you will find more what you want!Note: Please
            refer to our size image chart before order. That’s the size for this
            item.
          </div>
          <div>
            <ul style={{ padding: "0px 0px 0px 20px" }}>
              <li className="description-list">
                Lightweight knit blended fabric, nice wear resistance and
                wrinkle resistance, last longer without pilling.
              </li>
              <li className="description-list">
                Waterfall neck, long sleeve, solid color, open front, casual
                style for everyday comfort.
              </li>
              <li className="description-list">
                Fits for daily wear, school, vacation, work. Easy to pair with
                jeans, skinny leggings, boots in spring, autumn fall and winter.
              </li>
            </ul>
          </div>
        </div>

        <div className="rec-product-heading"  >Recommended Products</div>
          <div className="rec-products"   >
            <div className="rec-products-list" >
              <Card style={{width:"162"  }} >
                <Card.Img variant="top" src="pic5.png" className="rec-pic"  />
                <Card.Body>
                  <Card.Title className="rec-products-name"  >Hoodie Sweatshirt</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem  className="rec-products-amount">$61.20</ListGroupItem>
                  <Button  variant="contained" style={ {backgroundColor:" #47AFFF"}}>Shop Now</Button>
                </ListGroup>
              </Card>
            </div>
  
            <div className="rec-products-list">
              <Card style={{ width: "162" }}>
                <Card.Img variant="top" src="pic6.png" className="rec-pic" />
                <Card.Body>
                  <Card.Title  className="rec-products-name">V Neck Top</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem  className="rec-products-amount">$56.20</ListGroupItem>
                  <Button variant="contained" style={ {backgroundColor:" #47AFFF"}}>Shop Now</Button>
                </ListGroup>
              </Card>
            </div>
  
            <div className="rec-products-list1">
              <Card style={{ width: "162" }}>
                <Card.Img variant="top" src="pic7.png" className="rec-pic" />
                <Card.Body>
                  <Card.Title  className="rec-products-name">Short Sleeve</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem  className="rec-products-amount">$45.20</ListGroupItem>
                  <Button variant="contained" style={
                    {backgroundColor:" #47AFFF"}}>Shop Now</Button>
                </ListGroup>
              </Card>
            </div>
  
            <div className="rec-products-list">
              <Card style={{ width: "162" }}>
                <Card.Img variant="top" src="pic8.png" className="rec-pic" />
                <Card.Body>
                  <Card.Title  className="rec-products-name">Full Sleeve Sweater</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem  className="rec-products-amount">$71.20</ListGroupItem>
                  <Button variant="contained" style={ {backgroundColor:" #47AFFF"}}>Shop Now</Button>
                </ListGroup>
              </Card>
            </div>
          </div>
        
      </div>
    </Container>
  );
};

export default Body;
