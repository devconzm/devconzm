import React from 'react'

function Header(){
    return (
        <header >
        <nav className="navbar fixed  navbar-expand-lg navbar-light top-navbar" data-toggle="sticky-onscroll">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav pull-right">
                        <li className="nav-item">
                            <a className="nav-link active" href="#venue">Venue</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#partners">Partners</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#agenda">Agenda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#speakers">Speakers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tickets">Tickets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary" href="#devcon">DevCon18</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    </header>
    )
}

export default Header