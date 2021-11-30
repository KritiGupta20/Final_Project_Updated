import React from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./orderPlaced.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import InfoTable from "../infoTable/infoTable";

export default function OrderPlaced() {
	return (
		<React.Fragment>
			<div className={classes.body}>
				<Row>
					<Col className="col-lg-12 col-md-12 col-12 ">
						<div className={classes.placed}>
							<h1> Your Order has been placed </h1>
							<p>
								Lorem ipsum dolor amet sustainable gastropub,
								echo park actually green juice
							</p>
							<Link to="/">
								<Button
									onClick={() => {
										// value.clearCartHandler();
									}}
									className={classes.myButton}
									variant="warning"
								>
									Continue Shopping
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</div>
			<InfoTable />
		</React.Fragment>
	);
}
