import React, { useState } from 'react'

const AddCategory = () => {

    const [name, setName] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmssion = async(e) => {

        const formData = new Form();

        formData.append("name", name);
        formData.append("image", image);


        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:3000/addcategory", formData);
            console.log(response);
        }   
        catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmssion}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[100%] border p-4">
                <legend className="fieldset-legend">Add Category</legend>

                <label className="label">Name</label>
                <input type="text" className="input w-[100%]" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

                <label className="label">Upload Image</label>
                <input type="file" className="input w-[100%]" onChange={(e) => setImage(e.target.files[0])} />

                <button className='bg-black text-white w-[100%] py-2'>Add</button>
            </fieldset>
            </form>
        </>
    )
}

export default AddCategory
