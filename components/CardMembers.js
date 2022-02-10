import { useSelector, useDispatch } from "react-redux";
import { SET_SNACK_MESSAGE } from "../types";

function CardMembers({ members }) {
  const { users } = useSelector(state => state.app);
  const dispatch= useDispatch();

  const getAvatar = (id) => {
    const user = users.filter(user => user.id === id)[0];
    if (!user) return null;
    return `${user.name.charAt(0)}${user.firstName.charAt(0)}`;
  };

  const style = {
    avatar: 'rounded-full bg-slate-200 h-10 w-10 flex items-center justify-center hover:cursor-pointer mx-1',
  }

  const showUserInfo = () => {
    dispatch({
      type: SET_SNACK_MESSAGE,
      payload: {message: 'Pas encore implémenté ;-)'}
    })
  }

  const addUser = () => {
    dispatch({
      type: SET_SNACK_MESSAGE,
      payload: {message: 'Pas encore implémenté ;-)'}
    })
  }

  return (
    <div className="flex mb-3 ml-6">
      {members.map((member) => (
        <div key={member.id} className={`${style.avatar} bg-blue-300 hover:bg-blue-400`} onClick={showUserInfo} >{getAvatar(member.id)}</div>
      ))}
      <div>
        <div className={`${style.avatar} hover:bg-slate-300`} onClick={addUser}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CardMembers;
