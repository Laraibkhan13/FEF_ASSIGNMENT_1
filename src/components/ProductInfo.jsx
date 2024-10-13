import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';
import toast, {Toaster}from 'react-hot-toast'


const ProductInfo = () => {


    

    const [product, setProduct] = useState({
        name: 'Iphone 15',
        price: 50000,
        description: 'An old verison of Iphon.',
      });
    
      function updateProduct () {
        
        const newProduct={
          name: 'Iphone 16',
          price: 67000,
          description: 'A new and updated version of Iphone.',
        };
        setProduct(newProduct);
        validateProps(newProduct);
        
        
      };
  return (
    <div>
      <div className=' text-center m-3 font-bold text-2xl'><h1>QUESTION 2</h1></div>
      <h1 className=' m-5 font-bold text-xl'>Product Information</h1>
      <ProductDetails product={product} updateProduct={updateProduct} />
      <Toaster/>
    </div>
  );
}

function validateProps(product)
{
    if (typeof product.name !== 'string') {
        toast.error('proptype Error: Product name must be a string!');
      }
      else if (typeof product.price !== 'number') {
        toast.error('proptype Error: Product price must be a number!');
      }
      else if (typeof product.description !== 'string') {
        toast.error('proptype Error: Product description must be a string!');
      }
      else{
        toast.success('prop updated successfully')
      }
}

const ProductDetails = ({ product, updateProduct }) => {

    
    return (
      <div className=' m-10'>

        <p className='border-solid border-2 border-gray-500 rounded-md p-2 m-2 w-[500px]'>Name: {product.name}</p>
        <p className='border-solid border-2 border-gray-500 rounded-md p-2 m-2 w-[500px]'>Price: Rs.{product.price}</p>
        <p className='border-solid border-2 border-gray-500 rounded-md p-2 m-2 w-[500px]'>Description: {product.description}</p>

        <button onClick={updateProduct} className='border-solid border-2 border-black rounded-md p-2  m-2 bg-black text-gray-200' >Update Product</button>
      </div>
    )
  }
  ProductDetails.propTypes = {
      product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
      updateProduct: PropTypes.func.isRequired,
    };
  



export default ProductInfo