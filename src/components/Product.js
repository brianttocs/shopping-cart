import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    const { title, img, price, company, info, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() =>
              console.log("you clicked me on the image container!")
            }
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={() => {
            console.log("Added to the cart!");
            }}>
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  In Cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
{/**Card  footer */}
            <div className="card-footer  d-flex justify-content-between" >
              <p className='align-self-center mb-0'>{title}</p>
              <h5 className='text-blue font-italic mb-0'>
                <span className='mr-1'>${price}</span>
              </h5>
            </ div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  //product is the property of Product element
  
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div`
.card {
  border-color: transparent;
  transition: all 1s linear;
}
card-footer {
  background: transparent;
  border-tp: transparent;
  transition: all 1s linear;
}
&:hover {
  .card {
    border:rem black;
    box-shadow: 1.5px 1.5px 1.5px 1.5px #404040; 
  }
  .card-footer {
    background:  #b3edff;
  }
}
.img-container {
  position:relative;
  overflow: hidden; 
}
.card-img-top {
  transition: all 0.5s linear;
}
.img-container:hover .card-img-top {
  transform: scale(1.1);  
}
.cart-btn {
  position: absolute;
  bottom: 0;
  right:0;
  padding: 0.2rem 0.4rem;
  background: var(--lightBlue)
  border: none;
  color: var(--mainWhite)
  font-size: 1.4rem;
  border-radius: 0.5rem 0 0 0;
  transform: translate(100%, 100%);
  transition: all 0.5s linear;
}
.img-container: hover .cart-btn {
  transform: translate(0, 0)
}
.cart-btn: hover {
  color: #00b300;
  cursor: pointer;
} 

`;
 