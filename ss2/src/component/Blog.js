import React, {useState, useEffect} from "react";
import {deleteBlogById, getAll} from "../service/blog";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const getAllBlog = async () => {
       try {
           const data = await getAll();
           setBlogs(data);
           console.log(data);
       }catch (e){
           console.log(e);
       }
    }
    const deleteBlog = async (id) => {
        try {
            const message = await deleteBlogById(id);
            getAllBlog();
            console.log(message)
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        getAllBlog();
    },[])
    return (
        <>
            <div className={"text-lg-center mt-3"}>
                <Link
                    to="/create/blog"
                    className="btn btn-success table-add"
                    data-toggle="modal"
                >
                    <i className="fa fa-plus" aria-hidden="true" />
                    <span>Add New Contract</span>
                </Link>
            </div>
            <table className={"table table-striped table-hover"}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>UpdatedAt</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {blogs.map((item,index) => {
                    return (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.updated}</td>
                            <td className={"text-lg-center"} >
                                <Link to={`/blog/edit/${item.id}`}>
                                    <button className={"btn btn-success table-add"}>
                                        Edit
                                    </button>
                                </Link>
                                    <button onClick={() =>{deleteBlog(item.id)}} className={"m-lg-2  bg-danger"}>
                                        Delete
                                    </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    )
}