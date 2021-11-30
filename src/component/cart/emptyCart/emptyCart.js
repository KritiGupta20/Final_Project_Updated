import React from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./emptyCart.module.css";

export default function EmptyCart() {
  return (
    <div className={classes.body}>
      <Row>
        <Col className="col-lg-12  ">
          <section className={classes.empty}>
            <h1> !!OOPS </h1> <h2> There is no item in your cart </h2> 
          </section> 
        </Col> 
      </Row>
    </div>
  );
}
