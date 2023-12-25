import React from "react";
import { findTypeServiceById, getTypeService } from "../service/typeService";
import { useState } from "react";
import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { findTypeRentalById, getTypeRental } from "../service/typeRental";
import {
    createService,
    editService,
    findServiceById,
} from "../service/service";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import {NavLink} from "react-router-dom";
export default function ServiceCreate() {
    const navigate = useNavigate();
    const [typeSer, setTypeService] = useState([]);
    const [typeRental, setTypeRental] = useState([]);
    const getListTypeService = async () => {
        const data = await getTypeService();
        setTypeService(data);
    };
    const getListTypeRental = async () => {
        const data = await getTypeRental();
        setTypeRental(data);
    };
    useEffect(() => {
        getListTypeService();
        getListTypeRental();
        window.scrollTo(0,0)
    }, []);


    //  submit
    const handleSubmit = async (values) => {
        console.log(values.typeService);
        const type_service = await findTypeServiceById(values.typeService);
        console.log(type_service);
        const type_rental = await findTypeRentalById(values.rental_type);
        const object = {
            ...values,
            typeService: type_service,
            type_rental: type_rental,
        };
        await createService(object)
            .then(() => {
                navigate("/");
                Swal.fire({
                    title: "Success",
                    text: "New service has been created",
                    icon: "success",
                    timer: 2000,
                });
            })
            .catch(() => {
                navigate("/service/create");
            });
    };

    return (
        <div className="container" id="service-creation">
            <h1>Creation Service</h1>
            <div className="row gutters">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="account-settings">
                                <div className="user-profile">
                                    <div className="user-avatar">
                                        <img src="/img/logo@2x.png" alt="Maxwell Admin" />
                                    </div>
                                    <h5 className="user-name">Furama Resort</h5>
                                    <h6 className="user-area">furama@luxury.com</h6>
                                </div>
                                <div className="about">
                                    <h5>About</h5>
                                    <p>
                                        THIS WORLD CLASS RESORT, FURAMA DANANG, REPUTABLE FOR BEING
                                        A CULINARY RESORT IN VIETNAM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Formik
                    initialValues={{
                        typeService: 0,
                        service: "",
                        usable_area: 0,
                        costs: 0,
                        max_people: 0,
                        rental_type: 0,
                        standard: "",
                        description: "",
                        floor: 0,
                        pool: 0,
                        free: "",
                        image: "",
                        unit_price: 0,
                    }}
                    validationSchema={yup.object().shape({
                        typeService: yup
                            .number()
                            .required("Required")
                            .min(1, "No service type selected"),
                        service: yup.string().required("Required"),
                        usable_area: yup.number().required("Required").min(40, "Min: 40m2"),
                        costs: yup
                            .number()
                            .required("Required")
                            .min(1000, "Min: 1000")
                            .max(990000000, "Max: 10000000"),
                        max_people: yup
                            .number()
                            .required("Required")
                            .min(2, "Min: 2")
                            .max(30, "Max: 30"),
                        rental_type: yup
                            .number()
                            .required("Required")
                            .min(1, "No rental type selected"),
                        standard: yup.string().required("required"),
                        description: yup.string(),
                        floor: yup
                            .number()
                            .required(
                                "required-if-typeFacility-is-3",
                                "The floor number has not been entered"
                            ),
                        pool: yup
                            .number()
                            .required(
                                "required-if-typeFacility-is-1",
                                "Pool area must be greater than 0"
                            ),
                    })}
                    onSubmit={(values) => {
                        handleSubmit(values);
                    }}
                >
                    <Form className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-2 text-primary">Type Service</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <Field
                                                as="select"
                                                className="form-control"
                                                id="typeService"
                                                name="typeService"
                                            >
                                                <option value={0}>Choice a service</option>
                                                {typeSer.map((type) => {
                                                    return (
                                                        <option key={type.id} value={type.id}>
                                                            {type.serviceName}
                                                        </option>
                                                    );
                                                })}
                                            </Field>
                                            <ErrorMessage
                                                component="div"
                                                className="text-error"
                                                name="typeService"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-2 text-primary">Service Details</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="service">Service Name</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="service"
                                                name="service"
                                                placeholder="Enter service name"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                className="text-error"
                                                name="service"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="usable_area">Area</label>
                                            <Field
                                                type="number"
                                                className="form-control"
                                                id="usable_area"
                                                name="usable_area"
                                                placeholder="Enter the area"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                className="text-error"
                                                name="usable_area"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="costs">Rental Cost</label>
                                            <Field
                                                type="number"
                                                className="form-control"
                                                id="costs"
                                                name="costs"
                                                placeholder="Enter rental cost"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                className="text-error"
                                                name="costs"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="max_people">Capacity People</label>
                                            <Field
                                                type="number"
                                                className="form-control"
                                                id="max_people"
                                                name="max_people"
                                                placeholder="Entre capacity"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                className="text-error"
                                                name="max_people"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="rental_type">Rental type</label>
                                            <Field
                                                as="select"
                                                className="form-control"
                                                id="rental_type"
                                                name="rental_type"
                                            >
                                                <option>Choice a rental type</option>
                                                {typeRental.map((type) => {
                                                    return (
                                                        <option key={type.id} value={type.id}>
                                                            {type.rentalName}
                                                        </option>
                                                    );
                                                })}
                                            </Field>
                                            <ErrorMessage
                                                component="div"
                                                className="text-error"
                                                name="rental_type"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="standard">Standard room</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="standard"
                                                name="standard"
                                                placeholder="Enter Standard room"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                className="text-error"
                                                name="standard"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="description">Other Amenities</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="description"
                                                name="description"
                                                placeholder="Enter Other Amenities"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                className="text-error"
                                                name="description"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="pool">Swimming Pool Area</label>
                                            <Field
                                                type="number"
                                                className="form-control"
                                                id="pool"
                                                name="pool"
                                                placeholder="Enter Swimming Pool Area"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                className="text-error"
                                                name="pool"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="floor">Number of floors</label>
                                            <Field
                                                type="number"
                                                className="form-control"
                                                id="floor"
                                                name="floor"
                                                placeholder="Enter Number of Floors"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                className="text-error"
                                                name="floor"
                                            />
                                        </div>
                                        <div className="form-group" hidden>
                                            <label htmlFor="image">Image</label>
                                            <Field
                                                type="number"
                                                className="form-control"
                                                id="image"
                                                name="image"

                                            />
                                            <ErrorMessage
                                                component="div"
                                                className="text-error"
                                                name="floor"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mt-3 mb-2 text-primary">
                                            Accompanied service
                                        </h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="free">Accompanied service Name</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="free"
                                                name="free"
                                                placeholder="Accompanied service Name"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                className="text-error"
                                                name="free"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="unit_price">Unit price</label>
                                            <Field
                                                type="number"
                                                className="form-control"
                                                id="unit_price"
                                                name="unit_price"
                                                placeholder="Unit price"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                className="text-error"
                                                name="unit_price"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text-right">
                                            <NavLink to="/">
                                                <button
                                                    type="button"
                                                    id="submit"
                                                    name="submit"
                                                    className="btn btn-secondary"
                                                >
                                                    Cancel
                                                </button>
                                            </NavLink>
                                            <button
                                                type="submit"
                                                id="submit"
                                                name="submit"
                                                className="btn btn-primary"
                                            >
                                                Create
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
