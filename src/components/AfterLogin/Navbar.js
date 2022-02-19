import React from 'react'
import Logo from "../../image/logo.png"
import { useLocation } from 'react-router'
export default function Navbar() {
 
  
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar_top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"> <img src={Logo} alt="" width="60" height="60"
                    class="d-inline-block " /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Score card</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Contact</a>
                        </li>


                    </ul>
                </div>

            </div>

            <div class="d-flex justify-content-end flex-shrink-1">
                <button type="button" class="btn btn-primary position-relative" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    Notification
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">

                        <span class="visually-hidden">unread messages</span>
                    </span>


                </button>
            </div>

        </nav>)
}

