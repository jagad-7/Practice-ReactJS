import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         product: 'Samsung',
         price: '30000'
      }
    }

    updatePrice = () => {
        const priceInput = document.getElementById('price')
        const newPrice = priceInput.value
        this.setState({price: newPrice})
    }

  render() {
    return (
      <div>
        <h1>Product : {this.state.product}</h1>
        <h2>Price : {this.state.price}</h2>

        <input type='number' id='price'/>
        <button onClick={this.updatePrice}>Update</button>
      </div>
    )
  }
}
