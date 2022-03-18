import { combineReducers } from "redux";
import {
  ADD_CARD,
  ADD_TASK,
  SET_CARD_DETAIL,
  SET_SNACK_MESSAGE,
  UPDATE_CARD_TITLE,
  UPDATE_TASK,
} from "./types";
import { v4 as uuidv4 } from "uuid";

const userID = uuidv4();
const cardID = uuidv4();
const initialState = {
  idTaskDetail: null,
  users: [{ id: userID, name: "Wandolski", firstName: "Matthieu", color: "" }],
  cards: [{ id: cardID, title: "TODO" }],
  tasks: [
    {
      id: uuidv4(),
      cardID,
      title: "show cards",
      description: "",
      owners: [],
      priorityColor: "",
    },
    {
      id: uuidv4(),
      cardID,
      title: "create new cards",
      description: "",
      owners: [{ id: userID }],
      priorityColor: "",
    },
  ],
  snackMessage: { message: null },
  animation: "",
};

const trelloReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CARD:
      const { title } = payload; 
      const newCardId = uuidv4();
      return (state = { ...state, cards: [...state.cards, {id: newCardId, title}] });
    case SET_CARD_DETAIL:
      return (state = { ...state, idTaskDetail: payload.id });
    case UPDATE_CARD_TITLE:
      const { id, value } = payload;
      const updatedCards = [...state.cards];
      const index = state.cards.findIndex((card) => card.id === id);
      updatedCards[index].title = value;
      return (state = { ...state, cards: updatedCards });
    case ADD_TASK:
      const { task, cardID } = payload;
      const newTask = {
        id: uuidv4(),
        cardID,
        title: task,
        description: "",
        owners: [],
        priorityColor: "",
      };
      return (state = { ...state, tasks: [...state.tasks, newTask] });
    case UPDATE_TASK:
      const { task: updatedTask } = payload;
      const updatedTasks = [...state.tasks];
      const indexTask = state.tasks.findIndex((t) => t.id === updatedTask.id);
      updatedTasks[indexTask] = updatedTask;
      return (state = { ...state, tasks: updatedTasks });
    case SET_SNACK_MESSAGE:
      return {
        ...state,
        snackMessage: { message: payload.message },
      };
    default:
      return state;
  }
};

const reducers = {
  app: trelloReducer,
};

export default combineReducers(reducers);
