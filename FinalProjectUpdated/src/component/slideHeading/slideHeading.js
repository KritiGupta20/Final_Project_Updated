import React from "react";
import classes from "./slideHeading.module.css";

function SlideHeading() {
  return (
    <React.Fragment>
      <div className={classes.head}>
        <ul class="nav nav-tabs nav-justified">
          <li class="nav-item">
            <a class="nav-link " href="#Shopping Cart">
               
              Shopping Cart 
            </a> 
          </li> 
          <li class="nav-item">
            <a class="nav-link" href="#shipdetails">
               
              Shipping Details 
            </a> 
          </li> 
          <li class="nav-item">
            <a class="nav-link" href="#Payment Method">
               
              Payment Method 
            </a> 
          </li> 
        </ul> 
      </div>
    </React.Fragment>
  );
}

export default SlideHeading;
