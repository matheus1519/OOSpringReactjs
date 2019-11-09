import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery';

export default function Menu(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <a className="navbar-brand" href="#">Gestão Festa</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto <!-- nav-tabs -->">
                <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link" href="/festa">Festas</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link" href="/convidados">Convidados</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}