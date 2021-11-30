import React from "react";
import classes from "./review.module.css";
import { Row, Col } from "react-bootstrap";
import PermIdentityRoundedIcon from "@material-ui/icons/PermIdentityRounded";

import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";

function Review(props) {
	return (
		<React.Fragment>
			<div className={classes.reviewBody}>
				<h2>Reviews</h2>

				{Object.keys(props.review).map((key, j) => {
					return (
						<Row>
							<Col className="col-lg-4 col-md-6 col-12 mb-3">
								<div className={classes.reviewInfo}>
									<div className={classes.reviewLogo}>
										<p>
											<PermIdentityRoundedIcon />
										</p>
									</div>
									<div>
										<h5>{key}</h5>
										<h6>september 12, 2019</h6>
										<span>
											{" "}
											{props.star &&
												props.star.map((each, i) =>
													each ===
													"<StarRoundedIcon />" ? (
														<StarRoundedIcon
															key={i}
														/>
													) : (
														<StarOutlineRoundedIcon
															key={i}
														/>
													)
												)}{" "}
										</span>
									</div>
								</div>
							</Col>
							<Col className="col-lg-8 col-md-6 col-12 mb-3">
								<p className={classes.reviewPara}>
									{props.review[key]}
								</p>
							</Col>
						</Row>
					);
				})}
			</div>
		</React.Fragment>
	);
}

export default Review;
