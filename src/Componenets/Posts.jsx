import React,{ useEffect, useState } from 'react';
import { deletePost, getPost } from '../API/PostAPI';
import "../App.css";
import { Form } from './Form';
export const Posts = () => {

    const[data,setData]=useState([]);
// GET Method
    const getPostData= async ()=>{
        const res=await getPost();
        console.log(res.data);
        setData(res.data);
         };
        
         useEffect(()=>{
          getPostData();
         }, []);

   // DELETE Method 
      const handleDeletePost = async(id)=>{
      try {
        const res=await deletePost(id);
        // const res=await 
        if(res.status===200){
          const newUpdatedPosts = data.filter((curPost)=>{
            // when we want to add a element then we just use map method but 
            // when we want to delete a post then we use filter method. 
            return curPost.id !== id;
          });
          setData(newUpdatedPosts);
        }
        else
        {
          console.log("Failed to delete the post:",res.status);
        }
        }
        catch(error){
          console.log(error);
        }
      };



        
  return (
    <>
   <section className='section-form'>
    <Form  data={data} setData={setData}/>
   </section>

    <section className='section-post'>
        <ul>
            {data.map((curElem)=>{ 
                const {id,title,body}=curElem;
             return(
             <li key={id}>
                <p>Title:{title}</p>
                <p>Body:{body}</p>
                <button>Edit</button>
                <button className='btn-delete' onClick={()=>handleDeletePost(id)}>Delete</button>
             </li>
             );
             })}
        </ul>
    </section>
    </> 
  )
}

export default Posts
