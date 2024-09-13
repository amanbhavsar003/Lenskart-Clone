import React from 'react'
import './assets/css/bootstrap-5.3.3-dist/css/bootstrap.css'
import './assets/css/bootstrap-5.3.3-dist/css/style.css'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 nav-main-header">
                <div className="container-fluid nav1">
                    <a className="navbar-brand" href="#"><img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="lenscart" /></a>
                    <a className="navbar-brand mob-no" href="#"><img src="https://static1.lenskart.com/media/desktop/img/republic/eye/new-toll-number.png" alt="lenscart" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 search-bar" type="search" placeholder="What Are You Looking For?" aria-label="Search" />
                        </form>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul nav-one-c">

                            <li className="nav-item nav-one">
                                <a className="nav-link active" aria-current="page" href="#">Track Order</a>
                            </li>
                            <li className="nav-item nav-one">
                                <a className="nav-link active" aria-current="page" href="#">Sign & Signup</a>
                            </li>
                            <li className="nav-item nav-one">
                                <a className="nav-link active" aria-current="</li>page" href="#">Wishlist</a>
                            </li>
                            <li className="nav-item nav-one">
                                <a className="nav-link active" aria-current="page" href="#">Cart</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header