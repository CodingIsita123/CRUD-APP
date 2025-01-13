import axios from "axios";

const api=axios.create({
  baseURL:"https://jsonplaceholder.typicode.com",
});

export const getPost= () => {
  return api.get("/posts");
  // If you want to get the data in the API then you have to add only the /post.
};

export const deletePost=(id)=>{
  return api.delete(`/posts/${id}`);
}

export const PostData=(post)=>{
  return api.post("/posts",post);
}
//  in this add data function we have to pass the parameter post into this function.