import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-4370-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYTt3Ag0kwDhSmO3AT2sD4mfkoAO8fZsxfDgLKDU4zEKtQR6Ppk2Vfl6UsaI8I3hYjdnenK3F4IMju7VQqTQCbg1SIQt.png" alt="netflix"></img>
                </a>
            </div>
        </header>
    )
}