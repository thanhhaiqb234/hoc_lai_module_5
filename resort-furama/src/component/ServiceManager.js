import React, { useEffect, useState } from "react";
import Search from "./Search";
import Navigation from "./Navigation";
import { getListService, removeService } from "../service/service";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Service() {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    const data = await getListService();
    setServices(data);
  };

  useEffect(() => {
    getServices();
    window.scrollTo(0,0)
  }, []);
 const deleteService =async (id)=>{
  await removeService(id)
  await getServices();
  await Swal.fire({
    title: 'Deleted!',
    icon:'success',
    timer:2000
  })
 }
 function confirmDeleteService(id,name){
  Swal.fire({
    title: "Delete Service",
    text: "do you want to delete " + name + " ?",
    icon: "warning",
    showCancelButton: true,
    cancelButtonColor: "#3085d6",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#d33",
    confirmButtontext: "Delete",
  }).then((result)=>{
    if(result.isConfirmed){
      deleteService(id);
    }
  })

 }

  return (
    <>
      <Navigation />
      <Search />
      <div className="popular_places_area" id="service">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center mb_70">
                <h3>Service Popular</h3>
              </div>
            </div>
          </div>
          {/* LIST SERVICE */}
          <div className="row">
            { services.map((service) =>{
              return(
                <div className="col-lg-4 col-md-6">
                <div className="single_place">
                  <div className="thumb">
                    <img
                      src="img/service/Furama_Garden-Deluxe-5-450x291.jpg"
                      alt=""
                    />
                    <p className="prise">
                      ${service.costs}
                    </p>
                  </div>
                  <div className="place_info">
                    <Link href="">
                      <h3>{service.service}</h3>
                    </Link>
                    <p>
                      Room size: <span style={{color:'red'}}>{service.usable_area}m2</span>
                    </p>
                    <div className="rating_days d-flex justify-content-between">
                      <span className="d-flex justify-content-center align-items-center">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span>(20 Review)</span>
                      </span>
                      <div className="days">
                        <Link
                          to={`/service/edit/${service.id}`}
                          style={{ backgroundColor: "#1ec6b6", color: "white" }}
                          className="btn"
                        >
                          {" "}
                          Edit
                        </Link>
                        <button className=" btn btn-dele-service" onClick={()=>{confirmDeleteService(service.id,service.service)}}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="more_place_btn text-center">
                <a className="boxed-btn4" href="#">
                  More Places
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
