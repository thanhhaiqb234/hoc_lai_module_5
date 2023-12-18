import React, {useState, useEffect} from "react";
import {getAll} from "../service/blog";


export default function Blog() {
    const [blog, setBlog] = useState([]);
    const getAllBlog = async () => {
        const data = await getAll();
        setBlog(data);
    }
    console.log(blog)

    useEffect(() => {
        getAllBlog();
    })
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>UpdatedAt</th>
                </tr>
                </thead>
                <tbody>
                {blog.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    )
}