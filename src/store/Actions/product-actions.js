import axios from "axios";
import { productActions } from "../Slices/product-slice";
import APIUrls from "../../helpers/urls";

export const fetchProduct = () => {
  return async (dispatch) => {
    axios
      .get(APIUrls.allProducts())
      .then((res) => {
        dispatch(productActions.fetchProduct({ products: res.data.products }));
      })
      .catch((err) => {
        if (err?.response?.data?.message)
          console.log(err?.response?.data?.message);
      });
  };
};

export const fetchSingleProduct = (pid) => {
  return async (dispatch) => {
    axios
      .get(APIUrls.productById(pid))
      .then((res) => {
        dispatch(
          productActions.fetchSinleProduct({
            product: res.data.product,
          })
        );
      })
      .catch((err) => {
        if (err?.response?.data?.message)
          console.log(err?.response?.data?.message);
      });
  };
};
