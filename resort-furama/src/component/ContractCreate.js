import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { addNewContract } from "../service/contract";
import { useNavigate } from "react-router";
import { findCustomerById, getListCustomers } from "../service/customer";
import { findServiceById, getListService } from "../service/service";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function ContractCreate() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [services, setServices] = useState([]);
  const getAllCustomer = async () => {
    const data = await getListCustomers();
    setCustomers(data);
  };
  const getAllService = async () => {
    const data = await getListService();
    setServices(data);
    window.scrollTo(0,0);
  };

  useEffect(() => {
    getAllCustomer().catch((error) => {
      console.log("text-error", error);
      window.scrollTo(0,0)
    });
    getAllService().catch((error) => {
      console.log("text-error", error);
    });
  }, []);
  const createContract = async (contract) => {
    console.log(contract);
    const cus = await findCustomerById(contract.cus);
    console.log(cus);
    const ser = await findServiceById(contract.service);
    console.log(ser);
    await addNewContract({
      ...contract,
      customer:cus,
      service:ser

    })
      .then(() => {
        navigate("/contract/list");
      })
      .catch(() => {
        navigate("/contract/create");
      });
  };
  return (
    <div className="container" id="contract-creation">
      <h1>Creation Contract</h1>
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img
                     src="/img/logo@2x.png"
                      alt="logo"
                    />
                  </div>
                  <h5 className="user-name">Furama Resort</h5>
                  <h6 className="user-startDate">furama@luxury.com</h6>
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
            contractNumber: "",
            startDate: "",
            endDate: "",
            prepaidAmount: 0,
            totalPayment: 0,
            cus:0,
            service:0
          }}
          validationSchema={yup.object().shape({
            contractNumber: yup.string().required("required"),
            startDate: yup.date().required("required"),
            endDate: yup.date().required("required"),
            prepaidAmount: yup.number().required("required"),
            totalPayment: yup.number().required("required"),
            cus:yup.number().required("required").min(1),
            service: yup.number().required("required").min(1).max(18)
          })}
          onSubmit={(values) => {
            createContract(values);
          }}
        >
          <Form className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters" />
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Contract Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="contactNumber">Contract Number</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="contactNumber"
                        name="contractNumber"
                        placeholder="Enter Contract Number"
                       />
                      <ErrorMessage className="text-error" name="contractNumber" component="div"/>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      {/* <label for="contactNumber">Contract Number</label>
                      <Field type="text" class="form-control" id="contactNumber" placeholder="Enter Contract Number"> */}
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="cus">Customer</label>
                      <Field
                        as="select"
                        className="form-control"
                        id="cus"
                        name="cus"
                      >
                        <option>Choice a customer</option>
                        {customers.map((customer) => (
                          <option key={customer.id} value={customer.id}>
                            {customer.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage className="text-error" name="cus" component="div"/>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="service">Service</label>
                      <Field
                        as="select"
                        className="form-control"
                        id="service"
                        name="service"
                      >
                        <option>Choice a service</option>
                        {
                          services.map((ser) =>(
                            <option key={ser.id} value={ser.id}>{ser.service}</option>
                          ))
                        }
                        
                      </Field>
                      <ErrorMessage className="text-error" name="service" component="div"/>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="startDate">Start Date</label>
                      <Field
                        type="date"
                        className="form-control"
                        id="startDate"
                        name="startDate"
                        placeholder="Enter the Start Date"
                      />
                      <ErrorMessage className="text-error" name="startDate" component="div"/>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="endDate">End Date</label>
                      <Field
                        type="date"
                        className="form-control"
                        id="endDate"
                        name="endDate"
                        placeholder="Enter rentol End Date"
                      />
                      <ErrorMessage className="text-error" name="endDate" component="div"/>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="prepaidAmount">Prepaid Amount</label>
                      <Field
                        type="number"
                        className="form-control"
                        id="prepaidAmount"
                        name="prepaidAmount"
                        placeholder="Ente Prepaid Amount"
                      />
                      <ErrorMessage className="text-error" name="prepaidAmount" component="div"/>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="totalPayment">Total Payment</label>
                      <Field
                        type="number"
                        className="form-control"
                        id="totalPayment"
                        name="totalPayment"
                        placeholder="Enter Total Payment"
                      />
                      <ErrorMessage className="text-error" name="totalPayment" component="div"/>
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
