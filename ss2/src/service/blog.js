import axios from "axios";

export async function getAll() {
    const blogs = await axios.get("http://localhost:8080/blogs");
    console.log(blogs)
    return blogs.data;
}

export const createBlog = async (blog) => {
    try {
        await axios.post("http://localhost:8080/blogs",blog);
        return true;
    } catch (e) {
        return false;
    }
}
export const findByIdBlog = async (id) =>{
    const blog = await axios.get("http://localhost:8080/blogs/"+id);
    return blog.data;
}
export const updateByIdBlog = async (blog) => {
    await  axios.put(`http://localhost:8080/blogs/${blog.id}`,blog)
    return true;
}