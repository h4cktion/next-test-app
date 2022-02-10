import { ADD_CARD, ADD_TASK, SET_CARD_DETAIL, UPDATE_CARD_TITLE, UPDATE_TASK } from "./types";

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

export const updateTask = (task) => (dispatch) =>
  dispatch({
    type: UPDATE_TASK,
    payload: { task },
});

export const setIdTaskDetail = (id) => (dispatch) =>
  dispatch({
    type: SET_CARD_DETAIL,
    payload: { id },
});

export const updateCardTitle = (id, value) => (dispatch) =>
  dispatch({
    type: UPDATE_CARD_TITLE,
    payload: { id, value },
  });