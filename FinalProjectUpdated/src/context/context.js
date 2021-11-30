import React, { Component } from "react";
import { productData, productDetails } from "../productData";

const productContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    Details: productDetails,
    myCart: [],
    cartSubTotal: 0,
    cartTotal: 0,
    cartTax: 0,
    coupon: 0,
    delivery: 0,
    fName: "",
    lName: "",
    address1: "",
    address2: "",
    city: "",
    phone: "",
    modal: "",
  };

  componentDidMount() {
    this.productHandler();
  }

  productHandler = () => {
    let myProducts = [];
    productData.forEach((item) => {
      const singleItem = { ...item };
      myProducts = [...myProducts, singleItem];
    });
    this.setState(() => {
      return { products: myProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  detailsHandler = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { Details: product };
    });
  };

  addToCartHandler = (id) => {
    let customProducts = [...this.state.products];
    const index = customProducts.indexOf(this.getItem(id));
    const product = customProducts[index];
    product.addToCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          products: customProducts,
          myCart: [...this.state.myCart, product],
        };
      },
      () => {
        this.addTotalHandler();
      }
    );
  };

  incrementHandler = (id) => {
    let tempCart = [...this.state.myCart];
    const myProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(myProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          myCart: [...tempCart],
        };
      },
      () => {
        this.addTotalHandler();
      }
    );
  };

  decrementHandler = (id) => {
    let tempCart = [...this.state.myCart];
    const myProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(myProduct);
    const product = tempCart[index];
    if (product.count > 1) {
      product.count = product.count - 1;
    }
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          myCart: [...tempCart],
        };
      },
      () => {
        this.addTotalHandler();
      }
    );
  };

  variantHandler = (e) => {
    this.setState(() => {
      return {
        modal: e,
      };
    });
  };

  addTotalHandler = () => {
    let subTotal = 0;
    this.state.myCart.map((item) => (subTotal += item.total));
    const myTax = subTotal * 0.1;
    const tax = parseFloat(myTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  clearCartHandler = () => {
    this.setState(
      () => {
        return {
          myCart: [],
          coupon: 0,
          delivery: 0,
          fName: "",
          lName: "",
          address1: "",
          address2: "",
          city: "",
          phone: "",
          modal: "",
        };
      },
      () => {
        this.productHandler();
        this.addTotalHandler();
      }
    );
  };

  changeCouponHandler = (e) => {
    let subTotal = 0;
    this.state.myCart.map((item) => (subTotal += item.total));
    const myTax = subTotal * 0.1;
    const tax = parseFloat(myTax.toFixed(2));
    const total = subTotal + tax;
    const coupon = total * 0.1;

    if (e.target.value === "BOOTCAMP2021") {
      this.setState(() => {
        return {
          cartTotal: total - coupon,
          coupon: coupon,
        };
      });
    }
  };

  extraAmountHandler = () => {
    let subTotal = 0;
    this.state.myCart.map((item) => (subTotal += item.total));
    const myTax = subTotal * 0.1;
    const tax = parseFloat(myTax.toFixed(2));
    const total = subTotal + tax;
    const coupon = total * 0.1;
    const delivery = 20;
    this.setState(() => {
      return {
        delivery: delivery,
        cartTotal: total - coupon + delivery,
      };
    });
  };

  freeShipHandler = () => {
    this.setState(() => {
      return {
        delivery: 0,
      };
    });
  };

  fNameHandler = (e) => {
    this.setState(() => {
      return {
        fName: e,
      };
    });
  };
  lNameHandler = (e) => {
    this.setState(() => {
      return {
        lName: e,
      };
    });
  };
  address1Handler = (e) => {
    this.setState(() => {
      return {
        address1: e,
      };
    });
  };
  address2Handler = (e) => {
    this.setState(() => {
      return {
        address2: e,
      };
    });
  };

  cityHandler = (e) => {
    this.setState(() => {
      return {
        city: e,
      };
    });
  };
  phoneNumberHandler = (e) => {
    this.setState(() => {
      return {
        phone: e,
      };
    });
  };

  render() {
    return (
      <productContext.Provider
        value={{
          ...this.state,
          detailsHandler: this.detailsHandler,
          addToCartHandler: this.addToCartHandler,
          incrementHandler: this.incrementHandler,
          decrementHandler: this.decrementHandler,
          clearCartHandler: this.clearCartHandler,
          changeCouponHandler: this.changeCouponHandler,
          extraAmountHandler: this.extraAmountHandler,
          freeShipHandler: this.freeShipHandler,
          fNameHandler: this.fNameHandler,
          lNameHandler: this.lNameHandler,
          address1Handler: this.address1Handler,
          address2Handler: this.address2Handler,
          cityHandler: this.cityHandler,
          phoneNumberHandler: this.phoneNumberHandler,
          variantHandler: this.variantHandler,
        }}
      >
        {" "}
        {this.props.children}{" "}
      </productContext.Provider>
    );
  }
}

const ProductConsumer = productContext.Consumer;

export { ProductProvider, ProductConsumer };
