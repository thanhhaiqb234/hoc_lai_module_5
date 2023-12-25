import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListContracts } from "../service/contract";

export default function ContractManager() {
  const [contracts, setContracts] = useState([]);
  const getContracts = async () => {
    const data = await getListContracts();
    setContracts(data);
  };
  useEffect(() => {
    getContracts();
  });
  return (
    <div className="container-xl" id="contract">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>Contract</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <Link
                  to="/contract/list/create"
                  className="btn btn-success table-add"
                  data-toggle="modal"
                >
                  <i className="fa fa-plus" aria-hidden="true" />
                  <span>Add New Contract</span>
                </Link>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Code</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Prepaid Amount($)</th>
                <th>Total Payment($)</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((contract) => {
                return (
                  <tr key={contract.contractNumber}>
                    <td>{contract.id}</td>
                    <td>{contract.contractNumber}</td>
                    <td>{contract.customer.name}</td>
                    <td>{contract.service.service}</td>
                    <td>{contract.startDate}</td>
                    <td>{contract.endDate}</td>
                    <td>{contract.prepaidAmount}</td>
                    <td>{contract.totalPayment}</td>
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
              <li className="page-item disabled"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
