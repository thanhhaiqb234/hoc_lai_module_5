import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  findCustomerById,
  getListCustomers,
  removeCustomer,
} from "../service/customer";
import moment from "moment";
import Swal from "sweetalert2";
export default function CustomerManager() {
  const [customers, setCustomers] = useState([]);
  const getCustomer = async () => {
    const data = await getListCustomers();
    setCustomers(data);
  };
  useEffect(() => {
    getCustomer();
    window.scrollTo(0,0)
  }, []);

  const deleteCustomer = async (id) => {
    await removeCustomer(id);
    await getCustomer();
    await Swal.fire({
      title: "Deleted !",
      icon: "success",
      timer: 2000,
    });
  };

  function confirmDelete(id, name) {
    Swal.fire({
      title: "Delete Customer",
      text: "do you want to delete " + name + " ?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      confirmButtontext: "Delete",
    })
    .then((result) => {
      if (result.isConfirmed) {
        deleteCustomer(id);
      }
    });
  }
  return (
    <>
      <div className="container-xl" id="customer">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Customer</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <Link
                    to="/customer/list/create"
                    className="btn btn-success table-add"
                    data-toggle="modal"
                  >
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>

                    <span>Add New Customer</span>
                  </Link>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  {/* <th>Gender</th> */}
                  <th>Birthday</th>
                  <th>Identity Card</th>
                  <th>Type Customer</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => {
                  return (
                    <tr key={index}>
                      <td>{customer.id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.address}</td>
                      <td>{customer.phone_number}</td>
                      {/* <td>{customer.gender}</td> */}
                      <td>
                        {moment(customer.date_of_birth, "YYYY-MM-DD").format(
                          "DD/MM/YYYY"
                        )}
                      </td>
                      <td>{customer.id_card}</td>
                      <td>{customer.customer_type.name}</td>
                      <td>
                        <Link to={`/customer/edit/${customer.id}`}>
                          <i
                            className="fa fa-pencil-square-o"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <button
                          className="btn-delete"
                          onClick={() => {
                            confirmDelete(customer.id, customer.name);
                          }}
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a href="#">Previous</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal HTML */}
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete Customer</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete these Records?</p>
                <p className="text-warning">
                  <small>This action cannot be undone.</small>
                </p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="Cancel"
                />
                <input
                  type="submit"
                  className="btn btn-danger"
                  value="Delete"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
