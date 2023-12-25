import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { findTypeCustomerById, getTypeCustomer } from "../service/typeCustomer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { createCustomer } from "../service/customer";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
export default function CustomerCreate() {
  const navigate = useNavigate();
  const [typeCustomer, setTypeCustomer] = useState([]);
  const typeCustomers = async () => {
    const data = await getTypeCustomer();
    setTypeCustomer(data);
  };

  const handleCreate = async (customer) => {
    const typeCustomer = await findTypeCustomerById(customer.customer_type);
    //
    await createCustomer({
      ...customer,
      customer_type: typeCustomer,
    })
      .then(() => {
        navigate("/customer/list");
        Swal.fire({
          title: "Success",
          text: "New customer created successfully",
          icon: "success",
          timer: 2000,
        });
      })
      .catch(() => {
        navigate("/customer/create");
      });
  };

  useEffect(() => {
    typeCustomers();
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="container" id="customer-creation">
      <h1>Creation Customer</h1>
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img src="/img/logo@2x.png" alt="logo" />
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
            name: "",
            email: "",
            phone_number: "",
            date_of_birth: "",
            address: "",
            gender: "male",
            id_card: "",
            customer_type: 0,
          }}
          validationSchema={yup.object().shape({
            name: yup
              .string()
              .required("required")
              .matches(/^([A-Z][a-z]+\s)+([A-Z][a-z]+)$/, "Invalid name"),
            email: yup.string().required("required").email("Invalid Email"),
            phone_number: yup
              .string()
              .required("required")
              .matches(
                /^(84|0[3|5|7|8|9])+([0-9]{8})$/,
                "Invalid phone number"
              ),
              address: yup.string().required("required"),
            id_card: yup.string().required("required").matches(/^(\d{9}|\d{12})$/,"ID card character length is equal to 9 or 12 numbers"),

            customer_type: yup.number().required("required").min(1).max(5),
          })}
          onSubmit={(values) => {
            handleCreate(values);
          }}
        >
          <Form className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter full name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-error"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email ID"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-error"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone_number">Phone *</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="phone_number"
                        name="phone_number"
                        placeholder="Enter phone number"
                      />
                      <ErrorMessage
                        name="phone_number"
                        component="div"
                        className="text-error"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="date_of_birth">Birthday *</label>
                      {/* <div className="data-picker">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            format="MM/DD/YYYY"
                            name="date_of_birth"
                            slotProps={{
                              field: { shouldRespectLeadingZeros: true },
                            }}
                          />
                        </LocalizationProvider>
                      </div> */}
                      <Field
                        name="date_of_birth"
                        type="date"
                        className="form-control"
                        id="date_of_birth"
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="address">Address </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        placeholder="Enter Address"
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-error"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group gender">
                      <label style={{ fontSize: "15px" }}>Gender </label>
                      <label htmlFor="male" style={{ marginLeft: "20px" }}>
                        Male{" "}
                      </label>
                      <Field
                        style={{ marginLeft: "10px" }}
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                      />
                      <label htmlFor="female" style={{ marginLeft: "20px" }}>
                        Female{" "}
                      </label>
                      <Field
                        style={{ marginLeft: "10px" }}
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="id-card">Identity Card *</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="id_card"
                        name="id_card"
                        placeholder="Enter Identity Card"
                      />
                      <ErrorMessage
                        name="id_card"
                        component="div"
                        className="text-error"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="customer_type">Type Customer</label>
                      <Field as="select" name="customer_type">
                        <option>Choice a type</option>
                        {typeCustomer.map((type) => {
                          return (
                            <option key={type.id} value={type.id}>
                              {type.name}
                            </option>
                          );
                        })}
                      </Field>
                      <ErrorMessage
                        name="customer_type"
                        component="div"
                        className="text-error"
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <NavLink to={"/"}>
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
                        Add New
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
