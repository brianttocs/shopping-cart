import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {const {id, title, img, price, company, info, inCart}= value.detailProduct
          return (
            <div className='row'>
              <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                <h1>{title}</h1>
              </div>
            </div>
          )}}
        </ProductConsumer>
      </div>
    )
  }
}