import { combineReducers } from "redux";
import { ADD_CARD, ADD_TASK, SET_CARD_DETAIL } from "./types";
import { v4 as uuidv4 } from 'uuid';

const userID = uuidv4();
const initialState = {
  idTaskDetail: null,
  users: [{ id: userID, name: "Wandolski", firstName: "Matthieu", color: "" }],
  cards: [{ id: uuidv4(), title: "TODO" }],
  tasks: [
    {
      id: uuidv4(),
      title: "show cards",
      description: "",
      owners: [],
      priorityColor: "",
    },
    {
      id: uuidv4(),
      title: "create new cards",
      description: "",
      owners: [{ id: userID }],
      priorityColor: "",
    },
  ],
};

const trelloReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CARD:
      return (state = { ...state, cards: [...state.cards, payload] });
    case SET_CARD_DETAIL:
      return (state = { ...state,  idTaskDetail: payload.id});
    case ADD_TASK:
      const { task } = payload;
      const newTask = {
        id:  uuidv4(),
        title: task,
        description: "",
        owners: [],
        priorityColor: "",
      };
      return (state = { ...state, tasks: [...state.tasks, newTask] });
    default:
      return state;
  }
};

const reducers = {
  app: trelloReducer,
};

export default combineReducers(reducers);
