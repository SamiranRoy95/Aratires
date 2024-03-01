import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>



    <div className="nav__bar">
        <div>
            <h1 className="logu"><a className="logu__link"  href="#">Aratiresto</a></h1>
        </div>
        <nav>
            <ul className="nav__list">
                <li><a href="#seo">Chittagong</a></li>
                <li><a href="#motivation">GEC More</a></li>
                <li><a href="#science">Lalkhan Bazar</a></li>
                <li><a href="#marketing">Agrabad</a></li>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#contactus"> Contact Us</a></li>
            </ul>
        </nav>
    </div>


    </div>
  )
}

export default Navbar