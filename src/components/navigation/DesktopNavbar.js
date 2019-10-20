import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyDesktopNavbar = styled.nav`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;

	background: #130f40;
	color: white;

	height: 15vh;

	.logo {
		font-size: 7vh;
		font-weight: bold;
		text-shadwo: 3px 3px 3xp black;
	}

	.nav-links {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-evenly;
		align-items: center;

		width: 35vw;

		list-style: none;
	}

	.link {
		color: white;
		font-size: 2.5vh;
		text-decoration: none;
	}
`;

function DesktopNavbar() {
	return (
		<MyDesktopNavbar>
			<div className="logo">Logo</div>

			<ul className="nav-links">
				<li>
					<Link to="/" className="link">
						Home
					</Link>
				</li>
				<li>
					<Link to="/about" className="link">
						About
					</Link>
				</li>
				<li>
					<Link to="/contact" className="link">
						Contact
					</Link>
				</li>
			</ul>

			<button>Button</button>
		</MyDesktopNavbar>
	);
}

export default DesktopNavbar;
