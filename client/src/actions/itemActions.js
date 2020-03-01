import axios from "axios";
import { GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";

export const getItems = () => dispatch => {
  axios.get("/api/items").then(res => {
    dispatch({
      type: GET_ITEM,
      payload: res.data
    });
  });
};

export const addItem = item => dispatch => {
  dispatch(setItemsLoading());
  axios.post("/api/items", item).then(res => {
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    });
  });
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(() => {
    dispatch({
      type: DELETE_ITEM,
      payload: id
    });
  });
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
