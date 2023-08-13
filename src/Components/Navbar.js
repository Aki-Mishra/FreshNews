import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props){


    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
            <h1>hello</h1>
            <div className="container-fluid">
                <Link className="navbar-brand" to="">FreshNews</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="">Home</Link>
                        <Link className="nav-link" to="">Features</Link>
                        <Link className="nav-link" to="">Pricing</Link>
                        <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-capitalize" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                categories
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item text-capitalize" to="/general" >general</Link></li>
                                <li><Link className="dropdown-item text-capitalize" to="/health" >health</Link></li>
                                <li><Link className="dropdown-item text-capitalize" to="/sports" >sports</Link></li>
                                <li><Link className="dropdown-item text-capitalize" to="/entertainment" >entertainment</Link></li>
                                <li><Link className="dropdown-item text-capitalize" to="/science" >science</Link></li>
                                <li><Link className="dropdown-item text-capitalize" to="/business" >business</Link></li>
                                <li><Link className="dropdown-item text-capitalize" to="/technology" >technology</Link></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )

}

