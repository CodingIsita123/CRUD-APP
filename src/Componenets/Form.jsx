import React, { useState } from 'react'
import { PostData } from '../API/PostAPI';

export const Form = ({data,setData}) => {

const[addData,setAdddData]=useState({
    title:"",
    body:""
});

const handleInputChange=(e)=>{
 const name=e.target.name;
 const value=e.target.value;


setAdddData((prev)=>{
    return {
        ...prev,
        [name]:value,
        // in this code it is showing that the previous data will be updated 
        // in name and name access the both title and body .
    }
})
}

const addPostData=async()=>{
  const res  = await PostData(addData);
  console.log("res",res);


   if(res.status===201){
    setData([...data,res.data]);
     setAdddData({title: "",body: ""});
   }
};


const handleFormSubmit=(e)=>{
    e.preventDefault();
    addPostData();
}

  return (
   <form onSubmit={handleFormSubmit}>
    <div>
        <label htmlFor='title'></label>
        <input
        type='text'
        autoComplete='off'
        id='title'
        name='title'
        placeholder='Add title'
        value={addData.title}
        onChange={handleInputChange}
        />
    </div>

    <div>
        <label htmlFor='body'></label>
        <input
        type='text'
        autoComplete='off'
        id='body'
        name='body'
        placeholder='Add Post'
        value={addData.body}
        onChange={handleInputChange}
        />
    </div>
    
      <button type='submit'>Add</button>

   </form>
  )
}

// export default Form
