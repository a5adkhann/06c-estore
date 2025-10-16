import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from './CartContext';

const ProductsSection = () => {

  const [products, setProducts] = useState([]);
  const {cart, setCart} = useContext(cartContext);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getproducts");
      console.log(response);
      setProducts(response.data.products);
    }
    catch (err) {
      console.log(err);
    }
  }

  const addToCart = (c) => {
    setCart(cart.push(c));

    console.log(cart)
  }

  useEffect(() => {
    fetchProducts();
  }, [])


  return (
    <>
      <div className="cards grid md:grid-cols-3 grid-cols-1">
        {products.map((c, index) => (
        <div className="card bg-base-100 image-full w-96 shadow-sm">
          <figure>
            <img
              src={`http://localhost:3000/uploads/${c.image}`}
              alt={`${c.name}`} />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={() => addToCart(c)}>Buy Now</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  )
}

export default ProductsSection
