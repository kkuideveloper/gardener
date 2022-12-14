import React from "react";
import {Link} from 'react-router-dom';



function BeforeHeader(){
    return(
        <>
     
    <div className="container-fluid bg-dark text-light px-0 py-2">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <span className="fa fa-phone me-2"></span>
                    <span>+012 345 6789</span>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <span className="fa fa-envelope me-2"></span>
                    <span>info@example.com</span>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center mx-n2">
                    <span>Follow Us:</span>                   
                    <Link className="btn btn-link text-light" go="/"><i className="fa fa-facebook-f"></i></Link>
                    <Link className="btn btn-link text-light" go="/"><i className="fa fa-twitter"></i></Link>
                    <Link className="btn btn-link text-light" go="/"><i className="fa fa-linkedin"></i></Link>
                    <Link className="btn btn-link text-light" go="/"><i className="fa fa-instagram"></i></Link>
                </div>
            </div>
        </div>
    </div>
  
        </>
    );
}

export default BeforeHeader;