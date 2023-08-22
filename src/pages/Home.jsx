import React from 'react'
import SingleProduct from '../components/SingleProduct'

export default function Home() {
  return (
    <>
    

  <section className="home_banner_area mb-40">
    <div className="banner_inner d-flex align-items-center">
      <div className="container">
        <div className="banner_content row">
          <div className="col-lg-12">
            <p className="sub text-uppercase">men Collection</p>
            <h3><span>Show</span> Your <br />Personal <span>Style</span></h3>
            <h4>Fowl saw dry which a above together place.</h4>
            <a className="main_btn mt-40" href="#">View Collection</a>
          </div>
        </div>
      </div>
    </div>
  </section>
 


  <section className="feature-area section_gap_bottom_custom">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-feature">
            <a href="#" className="title">
              <i className="flaticon-money"></i>
              <h3>Money back gurantee</h3>
            </a>
            <p>Shall open divide a one</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-feature">
            <a href="#" className="title">
              <i className="flaticon-truck"></i>
              <h3>Free Delivery</h3>
            </a>
            <p>Shall open divide a one</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-feature">
            <a href="#" className="title">
              <i className="flaticon-support"></i>
              <h3>Alway support</h3>
            </a>
            <p>Shall open divide a one</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-feature">
            <a href="#" className="title">
              <i className="flaticon-blockchain"></i>
              <h3>Secure payment</h3>
            </a>
            <p>Shall open divide a one</p>
          </div>
        </div>
      </div>
    </div>
  </section>

 



  <section className="inspired_product_area section_gap_bottom_custom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="main_title">
            <h2><span>Inspired products</span></h2>
            <p>Bring called seed first of third give itself now ment</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6">
          <SingleProduct/>
        </div>
        <div className="col-lg-3 col-md-6">
          <SingleProduct/>
        </div>  <div className="col-lg-3 col-md-6">
          <SingleProduct/>
        </div>  <div className="col-lg-3 col-md-6">
          <SingleProduct/>
        </div>  <div className="col-lg-3 col-md-6">
          <SingleProduct/>
        </div>  <div className="col-lg-3 col-md-6">
          <SingleProduct/>
        </div>  <div className="col-lg-3 col-md-6">
          <SingleProduct/>
        </div>  <div className="col-lg-3 col-md-6">
          <SingleProduct/>
        </div>  <div className="col-lg-3 col-md-6">
          <SingleProduct/>
        </div>

      </div>
    </div>
  </section>
 

  
    </>
    
  )
}
