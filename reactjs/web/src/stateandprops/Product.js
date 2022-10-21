import React, { Component } from 'react'



export class Product extends Component {
    constructor(props){
        super(props); 
        this.state={
            id:this.props.id,
            name:this.props.name,
            price:this.props.price
            

        }
    }
    

    
  render() {
    return (
      <>
      <div className='row m-2'>
      <div className='col-2'>
      <div className='card'>
        <div className='card-header text-center'>
        <p>id:{this.state.id}</p>
        </div>
        <div className='card-body text-center'>
        <p>name:{this.state.name}</p>
        </div>
        <div className='card-footer text-center'></div>
        <p>price:{this.state.price}</p>
        <hr/>
        </div>
      </div>
      </div>
      </>
    )
  }
}

export default Product
