import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MyNavbar() {
	const myCart = useSelector((state) => state.cart.myCart);

	return (
		<Navbar
			className={classes.header}
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
		>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto mr-5">
					<Nav.Link className={classes.links} href="/">
						Home
					</Nav.Link>
					<Nav.Link className={classes.links} href="#about">
						About
					</Nav.Link>
					<Nav.Link className={classes.links} href="/products">
						Shop
					</Nav.Link>
					<Nav.Link className=" mr-5" href="#help">
						Help
					</Nav.Link>
					<Link to="/cart">
						<Button variant="warning">
							<ShoppingCartSharpIcon /> Your Cart
							<span class="badge badge-light">
								{myCart.length}
							</span>
						</Button>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default MyNavbar;
