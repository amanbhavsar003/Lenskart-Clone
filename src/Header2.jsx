import React from 'react'
import './assets/css/bootstrap-5.3.3-dist/css/style.css'

function Header2() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary p-2">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item header-2-item">
                <a class="nav-link active " aria-current="page" href="#">Eyeglasses</a>
                {/* <div className="container-cat">

                <div className='men r1'>
                  <img src="https://static.lenskart.com/media/desktop/img/men_pic.png" alt="" />
                  <span>Men</span>
                </div><br />
                <div className='women r1'>
                  <img src="https://static.lenskart.com/media/desktop/img/women_pic.png" alt="" />
                  <span>Women</span>
                </div><br />
                <div className='kids r1'>
                  <img src="https://static.lenskart.com/media/desktop/img/kid_pic.png" alt="" />
                  <span>Kids</span>
                </div>
                <div className=" c2">
                    <h6>SELECT CATEGORY</h6>
                    <div className='cetegory main'>
                      <p>Classic EyeGlasses starting from ₹2000</p>
                    </div>
                    <div className='cetegory'>
                      <p>Premium EyeGlasses starting from ₹3500</p>
                    </div>
                    <div className='cetegory'>
                      <p>Screen EyeGlasses starting from ₹500</p>
                    </div>
                  </div>


                </div> */}
              </li>
              <li class="nav-item header-2-item">
                <a class="nav-link active " aria-current="page" href="#">Screen Glasses</a>
              </li>
              <li class="nav-item header-2-item">
                <a class="nav-link active " aria-current="page" href="#">Kids Glasses</a>
              </li>
              <li class="nav-item header-2-item">
                <a class="nav-link active " aria-current="page" href="#">Contact Lenses</a>
              </li>
              <li class="nav-item header-2-item">
                <a class="nav-link active " aria-current="page" href="#">Sunglasses</a>
              </li>
              <li class="nav-item header-2-item">
                <a class="nav-link active " aria-current="page" href="#">Home Eye-test</a>
              </li>
              <li class="nav-item header-2-item">
                <a class="nav-link active " aria-current="page" href="#">Store Locator
                </a>
              </li>

              <div className='logo-container'>

                <div className='logos'>
                  <img src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png" alt="" />
                </div>
                <div className='logos'>
                  <img src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png" alt="" />
                </div>
                <div className='logos'>
                  <img src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png" alt="" />
                </div>
              </div>

            </ul>



          </div>
        </div>
      </nav>


      <div className="container-fluid header-cat">
        <div className="row">
          <div className="col-2 c1">
            <div className='men r1'>
              <img src="https://static.lenskart.com/media/desktop/img/men_pic.png" alt="" />
              <span>Men</span>
            </div>
            <div className='women r1'>
              <img src="https://static.lenskart.com/media/desktop/img/women_pic.png" alt="" />
              <span>Women</span>
            </div>
            <div className='kids r1'>
              <img src="https://static.lenskart.com/media/desktop/img/kid_pic.png" alt="" />
              <span>Kids</span>
            </div>
          </div>
          <div className="col-2 c2">
            <h6>SELECT CATEGORY</h6>
            <div className='cetegory main'>
              <p>Classic EyeGlasses starting from ₹2000</p>
            </div>
            <div className='cetegory'>
              <p>Premium EyeGlasses starting from ₹3500</p>
            </div>
            <div className='cetegory'>
              <p>Screen EyeGlasses starting from ₹500</p>
            </div>
          </div>
          <div className="col-2 c3">
            <h6>Our Top Picks</h6>
            <p className='p-m'>New arrivals</p>
            <p>Best Seller</p>
            <p>Lenskart BLU Lenses</p>
            <p>Tinted EyeGlasses</p>
            <p>Proggresive EyeGlasses</p>
          </div>
          <div className="col-2 c4">
            <h6>Frame Type</h6>
            <p className='p-m'>Rectangle Frames</p>
            <p>Round Frames</p>
            <p>Cat-Eye Frames</p>
            <p>Geometric Frames</p>
            <p>Rimless Frames</p>
            <p>Aviator Frames</p>
          </div>
          <div className="col-2 c5">
            <h6>Collection</h6>
            <p className='p-m'>Switch Grip</p>
            <p>Gulmarg Collection</p>
            <p>Urban Edit</p>
            <p>Blend Edit</p>
            <p>Sleek Steal</p>
            <p>Air Plex</p>
            <p>Electro pluk</p>
            <p></p>
          </div>
          <div className="col-2 c6">
            <h6>Brands</h6>
            <p className='p-m'>Vincent Chase</p>
            <p>OJOS</p>
            <p>Lenakart Studio</p>
          </div>
        </div>
      </div>



    </>
  )
}

export default Header2