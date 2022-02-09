import { ADD_CARD, ADD_TASK, SET_CARD_DETAIL } from "./types";

export const addCard = (title) => (dispatch) =>
  dispatch({
    type: ADD_CARD,
    payload: { title },
  });

export const addTask = (task) => (dispatch) =>
  dispatch({
    type: ADD_TASK,
    payload: { task },
  });

export const setIdTaskDetail = (id) => (dispatch) =>
  dispatch({
    type: SET_CARD_DETAIL,
    payload: { id },
  });