import {
    NavLink
} from "react-router-dom";


import { Logout } from "../Logout";

import "./styles.css"
export const Navbar = () => {
    return (
        <nav className="navbar">
            <img 
                className="navbar-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
                alt="instagram logo" 
            />
            <ul className="navbar-search">
                <input
                    className="navbar-search-input" type="text"/>
            </ul>
            <ul className="navbar-list">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">feed</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/me"> profile </NavLink>
                </li>
                <li>
                    <Logout/>
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/newPost"> Add Post</NavLink>
                </li>
            </ul>
        </nav>
    )
}