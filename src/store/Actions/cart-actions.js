import axios from "axios";
import { cartActions } from "../Slices/cart-slice";
import APIUrls from "../../helpers/urls";

export const fetchCart = () => {
  return async (dispatch) => {
    axios
      .get(APIUrls.wholeCart())
      .then((res) => {
        console.log(res);
        dispatch(cartActions.updateCart({ cart: res.data.cart }));
      })
      .catch((err) => {
        if (err?.response?.data?.message)
          console.log(err?.response?.data?.message);
      });
  };
};

export const addToCart = (product) => {
  return async (dispatch) => {
    axios
      .post(APIUrls.addToCart(), { product })
      .then((res) => {
        console.log(res);
        dispatch(cartActions.updateCart({ cart: res.data.cart }));
      })
      .catch((err) => {
        if (err?.response?.data?.message)
          console.log(err?.response?.data?.message);
      });
  };
};

export const removeFromCart = (pid) => {
  return async (dispatch) => {
    axios
      .delete(APIUrls.removeFromCart(pid))
      .then((res) => {
        console.log(res);
        dispatch(cartActions.updateCart({ cart: res.data.cart }));
      })
      .catch((err) => {
        if (err?.response?.data?.message)
          console.log(err?.response?.data?.message);
      });
  };
};

export const incrementProductQuantity = (pid) => {
  return async (dispatch) => {
    axios
      .patch(APIUrls.incrementProductQuantity(pid))
      .then((res) => {
        console.log(res);
        dispatch(cartActions.updateCart({ cart: res.data.cart }));
      })
      .catch((err) => {
        if (err?.response?.data?.message)
          console.log(err?.response?.data?.message);
      });
  };
};

export const derementProductQuantity = (pid) => {
  return async (dispatch) => {
    axios
      .patch(APIUrls.derementProductQuantity(pid))
      .then((res) => {
        console.log(res);
        dispatch(cartActions.updateCart({ cart: res.data.cart }));
      })

      .catch((err) => {
        if (err?.response?.data?.message)
          console.log(err?.response?.data?.message);
      });
  };
};
