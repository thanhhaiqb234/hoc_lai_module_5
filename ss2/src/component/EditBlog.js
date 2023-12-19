import React, {useEffect, useState} from "react";
import {Formik, Form , Field , ErrorMessage} from "formik";
import {useParams} from "react-router-dom";
import axios from "axios";
import {findByIdBlog, updateByIdBlog} from "../service/blog";
import { useNavigate } from "react-router-dom";

export default function EditBlog() {
    const param = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState({});
    const findBlogById = async () => {
        const data = await findByIdBlog(param.id);
        setBlog(data);
        console.log(data)
    };

    const handleSubmit = async (value) =>{
        await updateByIdBlog(value);
        navigate("/");
    }
    useEffect(() => {
        findBlogById();
    }, [param.id]);

    return (
        <>
            {
                blog.id &&
            <div className="container">
                <div className="row text-lg-center">
                    <div>
                       <Formik initialValues={
                           {
                               id: blog.id,
                               title : blog.title,
                               slug : blog.slug,
                               category : blog.category,
                               updatad : blog.updatad
                           }
                       }
                               onSubmit={(value) => {
                                   handleSubmit(value)
                               }}
                       >
                           <Form>
                               <div>
                                   <label htmlFor={"title"}>
                                       Title Blog
                                   </label>
                                   <br/>
                                   <Field id="title" name="title">
                                   </Field>
                                   <ErrorMessage name="title" className={"text-danger"}></ErrorMessage>
                               </div>
                               <div>
                                   <label htmlFor={"slug"}>
                                       Title Blog
                                   </label>
                                   <br/>
                                   <Field id="slug" name="slug">
                                   </Field>
                                   <ErrorMessage name="slug" className={"text-danger"}></ErrorMessage>
                               </div>
                               <div>
                                   <label htmlFor={"category"}>
                                       Title Blog
                                   </label>
                                   <br/>
                                   <Field id="category" name="category">
                                   </Field>
                                   <ErrorMessage name="category" className={"text-danger"}></ErrorMessage>
                               </div>
                               <div>
                                   <label htmlFor={"updatad"}>
                                       Title Blog
                                   </label>
                                   <br/>
                                   <Field id="updatad" name="updatad">
                                   </Field>
                                   <ErrorMessage name="updatad" className={"text-danger"}></ErrorMessage>
                               </div>
                               <br/>
                               <div> <button type="submit">Save</button></div>
                           </Form>
                       </Formik>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

