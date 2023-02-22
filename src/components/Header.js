import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<header>
			<nav>
				<NavLink
					className='nav-link'
					to='/'>
					TIS
				</NavLink>
				<ul className='nav-item'>
					<NavLink
						className='nav-link'
						to='/'>
						Home
					</NavLink>
					<NavLink
						className='nav-link'
						to='/about'>
						About
					</NavLink>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
