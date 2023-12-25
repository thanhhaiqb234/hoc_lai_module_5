import React, {useEffect, useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {useParams} from "react-router-dom";
import {findByIdBlog, updateByIdBlog} from "../service/blog";
import {useNavigate} from "react-router-dom";
import * as yup from "yup"
export default function EditBlog() {
    const param = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState({});
    const findBlogById = async () => {
        const data = await findByIdBlog(param.id);
        setBlog(data);
        console.log(data)
    };

    const handleSubmit = async (value) => {
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
                                    title: blog.title,
                                    slug: blog.slug,
                                    category: blog.category,
                                    updated: blog.updated
                                }
                            }
                                    validationSchema={yup.object().shape({
                                        title : yup.string().required("Không được để trống title"),
                                        slug : yup.string().required("Không được để trống slug"),
                                        category : yup.string().required("Không được để trống category"),
                                        updated : yup.string().required("Không được để trống updated"),
                                    })}
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
                                        <ErrorMessage component="div" name="title" className={"text-danger"}></ErrorMessage>
                                    </div>
                                    <div>
                                        <label htmlFor={"slug"}>
                                            Slug Blog
                                        </label>
                                        <br/>
                                        <Field id="slug" name="slug">
                                        </Field>
                                        <ErrorMessage component="div" name="slug" className={"text-danger"}></ErrorMessage>
                                    </div>
                                    <div>
                                        <label htmlFor={"category"}>
                                            Category Blog
                                        </label>
                                        <br/>
                                        <Field id="category" name="category">
                                        </Field>
                                        <ErrorMessage component="div" name="category" className={"text-danger"}></ErrorMessage>
                                    </div>
                                    <div>
                                        <label htmlFor={"updated"}>
                                            Updated Blog
                                        </label>
                                        <br/>
                                        <Field id="updated" name="updated">
                                        </Field>
                                        <ErrorMessage component="div" name="updated" className={"text-danger"}></ErrorMessage>
                                    </div>
                                    <br/>
                                    <div>
                                        <button type="submit">Save</button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

