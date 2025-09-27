import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmssion = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("name", name);
        formData.append("price", price);
        formData.append("quantity", quantity);
        formData.append("category", category);
        formData.append("image", image);

        try {
            const response = await axios.post("http://localhost:3000/addproduct", formData);
            console.log(response);
            setName("");
            setPrice("");
            setQuantity("");
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmssion} enctype="multipart/form-data">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[100%] border p-4">
                    <legend className="fieldset-legend">Add Product</legend>

                    <label className="label">Name</label>
                    <input type="text" className="input w-[100%]" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

                    <label className="label">Price</label>
                    <input type="number" className="input w-[100%]" placeholder="Name" value={price} onChange={(e) => setPrice(e.target.value)} />

                    <label className="label">Quantity</label>
                    <input type="number" className="input w-[100%]" placeholder="Name" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

                    <label className="label">Select Category</label>
                    <select defaultValue="Pick a color" className="select w-[100%]" onChange={category}>
                        <option disabled={true}>Select Category</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                    </select>

                    <label className="label">Upload Image</label>
                    <input type="file" className="input w-[100%]" onChange={(e) => setImage(e.target.files[0])} />

                    <button className='bg-black text-white w-[100%] py-2'>Add</button>
                </fieldset>
            </form>
        </>
    )
}

export default AddProduct
