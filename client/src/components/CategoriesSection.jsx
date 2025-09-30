import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CategoriesSection = () => {

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getcategory");
      console.log(response);
      setCategories(response.data.categories);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCategories();
  })


  return (
    <>
      <div className="cards grid md:grid-cols-3 grid-cols-1">
        {categories.map((c, index) => (
        <div className="card bg-base-100 image-full w-96 shadow-sm">
          <figure>
            <img
              src={`http://localhost:3000/uploads/${c.image}`}
              alt={`${c.name}`} />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  )
}

export default CategoriesSection
