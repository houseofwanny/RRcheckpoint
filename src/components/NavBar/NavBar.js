import React from 'react'
import { Navbar, FormControl } from 'react-bootstrap'
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = ({ title, handleChange, rate, ratingChanged }) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
                <Navbar.Brand><h3><Link to="/movies"> MovieDB</Link></h3></Navbar.Brand>
                <div className="related_links">
                    <ul className="menu">
                        <Link to="/">
                            <li className="menu-item">Home</li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        onChange={handleChange}
                        value={title}
                    />
                    <ReactStars className='stars'
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        // activeColor="#ffd700"
                        isHalf={true}
                        value={rate}
                    />
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar;