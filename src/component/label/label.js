import React from "react";
import classes from "./label.module.css";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";

import Products from "./../productList/productList";

function Mylabel() {
	return (
		<div className={classes.label}>
			<h1> It's just a few clicks away! </h1>

			<div className={classes.searchBar}>
				<SearchSharpIcon className={classes.searchIcon} />
				<input type="text" placeholder="Search"></input>
			</div>
			<div style={{ margin: "1rem", marginBottom: "10rem" }}>
				<Products />
			</div>
		</div>
	);
}

export default Mylabel;
