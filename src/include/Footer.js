import React from "react";
import {Link} from "react-router-dom"


function Footer(){
    return(

        <>
    
    <div class="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-4">Our Office</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                    <div class="d-flex pt-2">
                        <Link class="btn btn-square btn-outline-light rounded-circle me-2" go="/"><i class="fab fa-twitter"></i></Link>
                        <Link class="btn btn-square btn-outline-light rounded-circle me-2" go="/"><i class="fab fa-facebook-f"></i></Link>
                        <Link class="btn btn-square btn-outline-light rounded-circle me-2" go="/"><i class="fab fa-youtube"></i></Link>
                        <Link class="btn btn-square btn-outline-light rounded-circle me-2" go="/"><i class="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-4">Services</h4>
                    <Link class="btn btn-link" go="/">Landscaping</Link>
                    <Link class="btn btn-link" go="/">Pruning plants</Link>
                    <Link class="btn btn-link" go="/">Urban Gardening</Link>
                    <Link class="btn btn-link" go="/">Garden Maintenance</Link>
                    <Link class="btn btn-link" go="/">Green Technology</Link>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-4">Quick Links</h4>
                    <Link class="btn btn-link" go="/">About Us</Link>
                    <Link class="btn btn-link" go="/">Contact Us</Link>
                    <Link class="btn btn-link" go="/">Our Services</Link>
                    <Link class="btn btn-link" go="/">Terms & Condition</Link>
                    <Link class="btn btn-link" go="/">Support</Link>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div class="position-relative w-100">
                        <input class="form-control bg-light border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
            </>

    );
}

export default Footer;