import React from 'react'
import slider1 from './assets/img/Desktop_Banner1.webp'
import slider2 from './assets/img/Des.webp'

const Slider = () => {
    return (
        <>
            <div className="container-fluid my-3 p-0">
                <div id="carouselExampleAutoplaying-2" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={slider1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={slider2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://static1.lenskart.com/media/desktop/img/May24/starDust/web_BannerStarDust.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Slider