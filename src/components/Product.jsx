import React from 'react'

const Product = ({product}) => {

    const productStyle ={
        border: '1px solid #ddd',
        padding: '10px',
        background:"#fff",
        marginBottom: '10px',
    }

  return (
    <div style={productStyle} className="product">
        <h6>{product.title}</h6>
        <div className="price">${product.price}</div>
        <div className="actions">
            <button>Sat</button>
            <span>0</span>
            <button>Satın al</button>
        </div>

    </div>
    
  )
}

export default Product