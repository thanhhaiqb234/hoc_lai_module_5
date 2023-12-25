import {Form , Formik ,Field , ErrorMessage } from "formik";
import * as yup from "yup";
import {createBlog} from "../service/blog";
import * as blog from "../service/blog"
import {toast, ToastContainer} from "react-toastify";
import React from "react";
import {useNavigate} from "react-router-dom"
export function CreactBlog(){
    const navigate = useNavigate();
    const initValue = {
        title: "",
        slug: "",
        category: "",
        updated: ""
    };
    const validateObiect ={
    }
   async function handleSubmit(values){
        let result = await blog.createBlog(values);
        if (result){
            toast("oki")
            navigate("/");
        }
    };

return(
    <>
        <ToastContainer></ToastContainer>
        <div className="container">
            <div className="row text-lg-center">
                <div>
                    <Formik initialValues={initValue}
                            validationSchema={yup.object().shape({
                                title: yup.string().required("Không được để trống title"),
                                slug: yup.string().required("Không được để trống slug"),
                                category: yup.string().required("Không được để trống category"),
                                updated: yup.string().required("Không được để trống updated at"),
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
                                <ErrorMessage id="title" name="title" component="div" className={"text-danger"}></ErrorMessage>
                            </div>
                            <div>
                                <label htmlFor={"slug"}>
                                    Slug Blog
                                </label>
                                <br/>
                                <Field id="slug" name="slug">
                                </Field>
                                <ErrorMessage id="slug" name="slug" component="div" className={"text-danger"}></ErrorMessage>
                            </div>
                            <div>
                                <label htmlFor={"category"}>
                                    Category Blog
                                </label>
                                <br/>
                                <Field id="category" name="category">
                                </Field>
                                <ErrorMessage id="category" name="category" component="div" className={"text-danger"}></ErrorMessage>
                            </div>
                            <div>
                                <label htmlFor={"updated"}>
                                    Updated Blog
                                </label>
                                <br/>
                                <Field id="updated" name="updated">
                                </Field>
                                <ErrorMessage id="updated" name="updated" component="div" className={"text-danger"}></ErrorMessage>
                            </div>
                            <br/>
                            <div> <button type="submit">Save</button></div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    </>
)
}
export default CreactBlog;