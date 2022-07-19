import * as api from '../api';

export const getPosts = ()=> async (distpatch) =>{
    try {
        const  {data} = await api.fetchPosts();
        distpatch({type:'FETCH_ALL',payload:data})
    } catch(error){
        console.log(error.messge);
    }
}

export const createPost =(post)=>async(distpatch)=>{
try {
    const {data} =await api.createPost(post);
    distpatch({type:'CREATE',payload:data})
} catch (error) {
    console.log(error)
}
}