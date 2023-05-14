import { API } from "../../shared/Api";
import store from "../store.js"

const { dispatch } = store

const getAllPosts = async () => {
    const resultado = await API.get("posts")
    resultado.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    dispatch({
        type: "GET_POSTS",
        payload:{
            posts: resultado.data
        }
    })

}
const newPost = async (datos) => {
    const resultado = await API.post("posts/create", datos, {
        headers: {
          Authorization: localStorage.getItem("token")}})
    dispatch({
        type:"NEW_POST",
        payload:{
            post: resultado.data
        }
    })
}
const filterUserPosts = (posts, user) => {

    const filteredPosts = posts.filter((post) => post.user[0] === user._id)
    dispatch({
        type: "POSTS_USER",
        payload:{
            userPosts: filteredPosts
        }
    })
}
const deletePost = async (post, posts) => {
    await API.delete(`posts/delete/${post._id}`)
    let postsUpdated = [...posts]
    postsUpdated.splice(posts.indexOf(post), 1)
    dispatch({
        type:"DELETE_POST",
        payload:{
            posts: postsUpdated
        }
    })
}
const updatePost = async (post, posts, values) => {
    const indice = posts.indexOf(post)
    const updatedPosts =[...posts]   
    const resultado = await API.put(`/posts/update/${post._id}`, values)
    updatedPosts[indice] = resultado.data
    console.log(updatedPosts);
    dispatch({
        type: "UPDATE_POST",
        payload:{
            posts:updatedPosts
        } 
    })
}
const filterPostsByUser = async (posts, inputValue, users) => {
    let usersCopy =[...users]
   let filteredPosts = [...posts]

    if (inputValue.length > 1) {
     usersCopy = usersCopy.filter((user) => user.userName.toLowerCase().includes(inputValue.toLowerCase()))
     filteredPosts = filteredPosts.filter((post) =>{
        return usersCopy.some(user => user.id === post.user[0])
       })
    }

    dispatch({
        type:"FILTER_POSTS",
        payload:{
            posts: filteredPosts
        }
    })
}
export {getAllPosts, newPost,  deletePost, updatePost, filterUserPosts, filterPostsByUser}