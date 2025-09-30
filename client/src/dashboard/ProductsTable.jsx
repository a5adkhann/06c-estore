import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ProductsTable = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getproduct");
      console.log(response);
      setProducts(response.data.products);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  })


  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Image</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>
                <td>
                    <img src={`http://localhost:3000/uploads/${p.image}`} alt="" width={100} />
                </td>
                <td>{p.category}</td>
                <td>
                  <button className="btn btn-outline btn-info">Edit</button>
                  <button className="btn btn-outline btn-error">Delete</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      <Link to="addproduct">Add</Link>

    </>
  )
}

export default ProductsTable
