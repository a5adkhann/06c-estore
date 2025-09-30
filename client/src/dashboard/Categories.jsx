import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Categories = () => {
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
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{c.name}</td>
                <td>
                  <img src={`http://localhost:3000/uploads/${c.image}`} alt="" width={100} />
                </td>
                <td>
                  <button className="btn btn-outline btn-info">Edit</button>
                  <button className="btn btn-outline btn-error">Delete</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      <Link to="addcategory">Add</Link>

    </>
  )
}

export default Categories
