import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIdTaskDetail } from "../actions";
import { SET_SNACK_MESSAGE } from "../types";

function Tile({ task }) {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.app);
  const { title, owners, id } = task;

  const getUserInfo = (id) => {
    const user = users.filter((user) => user.id === id)[0];
    if (!user) return null;
    return `${user.name.charAt(0)}${user.firstName.charAt(0)}`;
  };

  const showTaskDetail = (e) => {
    dispatch(setIdTaskDetail(id));
  };

  const showOptions = (e) => {
    e.stopPropagation();
    dispatch({
      type: SET_SNACK_MESSAGE,
      payload: {message: 'Pas encore implémenté ;-)'}
    })
  };

  const showUserDetails = (e) => {
    e.stopPropagation();
    dispatch({
      type: SET_SNACK_MESSAGE,
      payload: {message: 'Pas encore implémenté ;-)'}
    })
  };

  return (
    <div
      className="bg-gray-50 p-2 rounded my-2  hover:bg-gray-100 hover:cursor-pointer"
      onClick={showTaskDetail}
    >
      <div className="flex justify-between items-center">
        {title}
        <div className="hover:bg-gray-200 p-2 rounded" onClick={showOptions}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            name="options"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-end">
        {owners.map((owner) => (
          <div
            key={owner.id}
            className="rounded-full bg-blue-400 h-8 w-8 flex items-center justify-center text-bold text-xs hover:bg-blue-500"
            onClick={showUserDetails}
          >
            {getUserInfo(owner.id)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tile;
